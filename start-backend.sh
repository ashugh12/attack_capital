#!/bin/bash

# Script to start the backend Docker container

echo "🚀 Starting Minimal Voice Assistant Backend..."

# Check if .env.local exists
if [ ! -f "backend/.env.local" ]; then
    echo "❌ Error: backend/.env.local not found!"
    echo "Please copy backend/env.example to backend/.env.local and configure your API keys."
    exit 1
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Error: Docker is not running. Please start Docker first."
    exit 1
fi

# Build the Docker image
echo "🔨 Building Docker image..."
docker build -t minimal-voice-assistant ./backend

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to build Docker image"
    exit 1
fi

# Stop any existing container
echo "🛑 Stopping existing container..."
docker stop minimal-voice-assistant-container 2>/dev/null
docker rm minimal-voice-assistant-container 2>/dev/null

# Run the container
echo "▶️  Starting container..."
docker run -d \
    --name minimal-voice-assistant-container \
    --env-file ./backend/.env.local \
    minimal-voice-assistant

if [ $? -eq 0 ]; then
    echo "✅ Backend started successfully!"
    echo "📊 Container logs:"
    docker logs -f minimal-voice-assistant-container
else
    echo "❌ Error: Failed to start container"
    exit 1
fi
