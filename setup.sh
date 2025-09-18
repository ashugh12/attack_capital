#!/bin/bash

# Complete setup script for the minimal voice assistant

echo "🎯 Setting up Minimal Voice Assistant..."

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "🔍 Checking prerequisites..."

if ! command_exists docker; then
    echo "❌ Error: Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command_exists node; then
    echo "❌ Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

if ! command_exists npm; then
    echo "❌ Error: npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ All prerequisites found"

# Setup backend environment
echo "🔧 Setting up backend..."
if [ ! -f "backend/.env.local" ]; then
    cp backend/env.example backend/.env.local
    echo "📝 Created backend/.env.local - please edit with your API keys"
else
    echo "✅ Backend environment file already exists"
fi

# Setup frontend environment
echo "🔧 Setting up frontend..."
if [ ! -f "frontend/.env.local" ]; then
    cp frontend/env.example frontend/.env.local
    echo "📝 Created frontend/.env.local - please edit with your API keys"
else
    echo "✅ Frontend environment file already exists"
fi

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Edit backend/.env.local with your API keys:"
echo "   - LIVEKIT_URL, LIVEKIT_API_KEY, LIVEKIT_API_SECRET"
echo "   - OPENAI_API_KEY, DEEPGRAM_API_KEY, CARTESIA_API_KEY"
echo ""
echo "2. Edit frontend/.env.local with your LiveKit credentials:"
echo "   - LIVEKIT_URL, LIVEKIT_API_KEY, LIVEKIT_API_SECRET"
echo ""
echo "3. Start the backend:"
echo "   ./start-backend.sh"
echo ""
echo "4. Start the frontend (in a new terminal):"
echo "   ./start-frontend.sh"
echo ""
echo "5. Open http://localhost:3000 in your browser"
echo ""
echo "🔧 Manual commands:"
echo "   Backend: cd backend && docker build -t minimal-voice-assistant . && docker run --env-file .env.local minimal-voice-assistant"
echo "   Frontend: cd frontend && npm run dev"
