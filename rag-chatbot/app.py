from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from agent import agent   # ← YOUR agent object
from agents import Runner  # ← To run agent async

# ---------------------------
# FastAPI Init + CORS
# ---------------------------
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # UI can call from anywhere
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------
# Request Model
# ---------------------------
class Query(BaseModel):
    question: str


# ---------------------------
# Chat Endpoint
# ---------------------------
@app.post("/ask")
async def ask_question(body: Query):
    question = body.question

    result = await Runner.run(
        agent,
        input=question
    )

    return {"answer": result.final_output}


# Health check
@app.get("/")
def home():
    return {"status": "RAG chatbot API running"}
