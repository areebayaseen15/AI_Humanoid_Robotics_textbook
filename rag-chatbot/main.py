import requests
import xml.etree.ElementTree as ET
from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance, PointStruct 
import cohere
import trafilatura
import os
from dotenv import load_dotenv

load_dotenv()

# ----------------------------
# Config
# ----------------------------
SITEMAP_URL = os.getenv("SITEMAP_URL")
COLLECTION_NAME = "humanoid_ai_book"

cohere_client = cohere.Client(os.getenv("COHERE_API_KEY"))
EMBED_MODEL = "embed-english-v3.0"

qdrant = QdrantClient(
    url=os.getenv("QDRANT_URL"),
    api_key=os.getenv("QDRANT_API_KEY")
)

# ----------------------------
# Functions
# ----------------------------
def get_all_urls(sitemap_url):
    xml_text = requests.get(sitemap_url).text
    root = ET.fromstring(xml_text)
    urls = []
    for child in root:
        loc_tag = child.find("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")
        if loc_tag is not None:
            urls.append(loc_tag.text)
    return urls

def extract_text_from_url(url):
    html = requests.get(url).text
    text = trafilatura.extract(html)
    return text

def chunk_text(text, max_chars=1200):
    chunks = []
    while len(text) > max_chars:
        split_pos = text[:max_chars].rfind(". ")
        if split_pos == -1:
            split_pos = max_chars
        chunks.append(text[:split_pos])
        text = text[split_pos:]
    chunks.append(text)
    return chunks

def embed(text):
    response = cohere_client.embed(
        model=EMBED_MODEL,
        input_type="search_query",
        texts=[text],
    )
    return response.embeddings[0]

def create_collection():
    qdrant.recreate_collection(
        collection_name=COLLECTION_NAME,
        vectors_config=VectorParams(
            size=1024,
            distance=Distance.COSINE
        )
    )

def save_chunk_to_qdrant(chunk, chunk_id, url):
    vector = embed(chunk)
    qdrant.upsert(
        collection_name=COLLECTION_NAME,
        points=[PointStruct(
            id=chunk_id,
            vector=vector,
            payload={"url": url, "text": chunk, "chunk_id": chunk_id}
        )]
    )

# ----------------------------
# Ingestion pipeline
# ----------------------------
def ingest_book():
    urls = get_all_urls(SITEMAP_URL)
    create_collection()
    global_id = 1
    for url in urls:
        text = extract_text_from_url(url)
        if not text:
            continue
        chunks = chunk_text(text)
        for ch in chunks:
            save_chunk_to_qdrant(ch, global_id, url)
            global_id += 1
    print("Ingestion completed! Total chunks:", global_id - 1)

if __name__ == "__main__":
    ingest_book()
