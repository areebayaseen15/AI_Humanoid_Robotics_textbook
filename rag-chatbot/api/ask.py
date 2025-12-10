from fastapi import FastAPI
from pydantic import BaseModel
from agent import agent
from agents import Runner
from mangum import Mangum  # Serverless adapter

app = FastAPI()

# Request model
class Query(BaseModel):
    question: str

# Chat endpoint
@app.post("/ask")
async def ask_question(body: Query):
    question = body.question
    result = await Runner.run(agent, input=question)
    return {"answer": result.final_output}

# Vercel serverless handler
handler = Mangum(app)
