from agents import Agent, Runner, OpenAIChatCompletionsModel, AsyncOpenAI
from agents import set_tracing_disabled, function_tool
from agents import enable_verbose_stdout_logging
import os
from dotenv import load_dotenv
import cohere
from qdrant_client import QdrantClient

# ----------------------------
# INIT
# ----------------------------
enable_verbose_stdout_logging()
load_dotenv()
set_tracing_disabled(disabled=True)

# ----------------------------
# LLM Model
# ----------------------------
gemini_api_key = os.getenv("GEMINI_API_KEY")
provider = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

model = OpenAIChatCompletionsModel(
    model="gemini-2.0-flash",
    openai_client=provider
)

# ----------------------------
# Cohere + Qdrant
# ----------------------------
cohere_client = cohere.Client(os.getenv("COHERE_API_KEY"))

qdrant = QdrantClient(
    url=os.getenv("QDRANT_URL"),
    api_key=os.getenv("QDRANT_API_KEY")
)

COLLECTION_NAME = "humanoid_ai_book"

# ----------------------------
# Embedding function
# ----------------------------
def get_embedding(text):
    response = cohere_client.embed(
        model="embed-english-v3.0",
        input_type="search_query",
        texts=[text],
    )
    return response.embeddings[0]

# ----------------------------
# Retrieval tool
# ----------------------------
@function_tool
def retrieve(query):
    embedding = get_embedding(query)
    result = qdrant.query_points(
        collection_name=COLLECTION_NAME,
        query=embedding,
        limit=5
    )
    return [point.payload["text"] for point in result.points]

# ----------------------------
# Agent
# ----------------------------
agent = Agent(
    name="Assistant",
    instructions="""
You are an AI tutor for the Physical AI & Humanoid Robotics textbook.
To answer the user question, first call the tool `retrieve` with the user query.
Use ONLY the returned content from `retrieve` to answer.
If the answer is not in the retrieved content, say "I don't know".
""",
    model=model,
    tools=[retrieve]
)
