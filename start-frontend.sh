#!/bin/bash

# Script to start the frontend development server

echo "🚀 Starting Minimal Voice Assistant Frontend..."

# Check if .env.local exists
if [ ! -f "frontend/.env.local" ]; then
    echo "❌ Error: frontend/.env.local not found!"
    echo "Please copy frontend/env.example to frontend/.env.local and configure your API keys."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing dependencies..."
    cd frontend
    npm install
    cd ..
fi

# Start the development server
echo "▶️  Starting development server..."
cd frontend
npm run dev
