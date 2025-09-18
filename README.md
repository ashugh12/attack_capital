# Minimal Voice Assistant Assignment

This is a minimal implementation of a voice AI assistant with the same functionality as the original but with a simplified UI.

## Features

- **Text Chat**: Type messages and receive text responses
- **Voice Chat**: Speak to the assistant and receive audio responses
- **Same Backend**: Uses the exact same LiveKit agent backend
- **Minimal UI**: Simple connection screen and chat dialog
- **Docker Support**: Backend runs in Docker container

## Architecture

```
assignment/
├── backend/           # Python LiveKit agent
│   ├── src/agent.py  # Main agent code (same as original)
│   ├── Dockerfile    # Docker configuration
│   └── pyproject.toml
└── frontend/         # Next.js minimal UI
    ├── app/          # Next.js app router
    └── package.json
```

## Quick Start

### 1. Backend Setup

```bash
cd backend

# Copy environment file
cp env.example .env.local

# Edit .env.local with your API keys:
# - LIVEKIT_URL, LIVEKIT_API_KEY, LIVEKIT_API_SECRET
# - OPENAI_API_KEY, DEEPGRAM_API_KEY, CARTESIA_API_KEY

# Build and run with Docker
docker build -t minimal-voice-assistant .
docker run --env-file .env.local minimal-voice-assistant
```

### 2. Frontend Setup

```bash
cd frontend

# Copy environment file
cp env.example .env.local

# Edit .env.local with your LiveKit credentials:
# - LIVEKIT_URL, LIVEKIT_API_KEY, LIVEKIT_API_SECRET

# Install and run
npm install
npm run dev
```

### 3. Usage

1. Open http://localhost:3000
2. Click "Connect" to join the voice assistant
3. Type messages or speak to the assistant
4. Receive text responses for typed messages
5. Receive audio + text responses for spoken messages

## Key Differences from Original

- **Simplified UI**: Single page with connection button and chat dialog
- **Minimal Components**: Removed complex control bars and device selectors
- **Same Functionality**: Identical backend agent with weather lookup and voice features
- **Same API Keys**: Uses the same environment variables and API configurations

## API Keys Required

- **LiveKit**: For real-time communication
- **OpenAI**: For GPT-4o-mini LLM
- **Deepgram**: For speech-to-text
- **Cartesia**: For text-to-speech

## Docker Commands

```bash
# Build the backend image
docker build -t minimal-voice-assistant ./backend

# Run the backend container
docker run --env-file ./backend/.env.local minimal-voice-assistant

# Stop the container
docker stop $(docker ps -q --filter ancestor=minimal-voice-assistant)
```

## Easy Setup Scripts

```bash
# Complete setup (run once)
./setup.sh

# Start backend (Terminal 1)
./start-backend.sh

# Start frontend (Terminal 2)
./start-frontend.sh
```
