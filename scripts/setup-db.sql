-- Database setup for RAG system
-- Run this in your PostgreSQL database

-- Enable the pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create documents table
CREATE TABLE IF NOT EXISTS documents (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  source_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create doc_chunks table (matching api/index.js expectations)
CREATE TABLE IF NOT EXISTS doc_chunks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doc_id BIGINT REFERENCES documents(id) ON DELETE CASCADE,
  "order" INTEGER NOT NULL,
  text TEXT NOT NULL,
  headings TEXT,
  source_path TEXT,
  embedding VECTOR(768), -- Using 768 dimensions for Gemini text-embedding-004
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for similarity search
CREATE INDEX IF NOT EXISTS idx_doc_chunks_embedding 
ON doc_chunks USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Create the match_chunks function for RAG queries
CREATE OR REPLACE FUNCTION match_chunks(
  query_embedding VECTOR(768),
  query_text TEXT,
  match_count INT DEFAULT 8,
  match_threshold FLOAT DEFAULT 0.0
)
RETURNS TABLE (
  id UUID,
  doc_id BIGINT,
  "order" INTEGER,
  text TEXT,
  headings TEXT,
  source_path TEXT,
  score FLOAT
)
LANGUAGE sql STABLE
AS $$
  SELECT
    doc_chunks.id,
    doc_chunks.doc_id,
    doc_chunks."order",
    doc_chunks.text,
    doc_chunks.headings,
    doc_chunks.source_path,
    1 - (doc_chunks.embedding <=> query_embedding) as score
  FROM doc_chunks
  WHERE 1 - (doc_chunks.embedding <=> query_embedding) > match_threshold
  ORDER BY score DESC
  LIMIT match_count;
$$;

-- Create a simple knowledge table for direct text storage (fallback)
CREATE TABLE IF NOT EXISTS knowledge (
  id BIGSERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  embedding VECTOR(768),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for knowledge table
CREATE INDEX IF NOT EXISTS idx_knowledge_embedding 
ON knowledge USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);
