# Minimal Voice Assistant Assignment

This project is a minimal implementation of a voice AI assistant, designed to provide core voice and text chat functionalities with a simplified UI and backend architecture.

## Project Structure

```
assignment/
├── backend/                 # Python backend for LiveKit agent
│   ├── src/                 # Source code for the agent
│   │   └── agent.py         # Main agent implementation
│   ├── Dockerfile           # Docker configuration for backend
│   ├── pyproject.toml       # Python project configuration
│   └── minimal_voice_assistant.egg-info/  # Python package metadata
├── frontend/                # Next.js frontend application
│   ├── app/                 # Next.js app router and pages
│   │   ├── api/             # API routes
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Main page component
│   ├── components/          # React components (UI, livekit, etc.)
│   ├── hooks/               # React hooks
│   ├── lib/                 # Utility functions and types
│   ├── public/              # Static assets (fonts, images)
│   ├── package.json         # Frontend dependencies and scripts
│   ├── tsconfig.json        # TypeScript configuration
│   └── next.config.js       # Next.js configuration
├── setup.sh                 # Setup script for environment
├── start-backend.sh         # Script to start backend server
├── start-frontend.sh        # Script to start frontend server
└── README.md                # This file
```

## Features

- Text and voice chat with AI assistant
- Real-time communication using LiveKit
- Simplified UI with minimal components
- Docker support for backend containerization
- Environment configuration via `.env` files

## Prerequisites

- Docker (for backend container)
- Node.js and npm (for frontend)
- API keys for LiveKit, OpenAI, Deepgram, and Cartesia

## Setup Instructions

### Backend

1. Navigate to the backend directory:
   ```bash
   cd assignment/backend
   ```

2. Copy the example environment file and update with your API keys:
   ```bash
   cp env.example .env.local
   # Edit .env.local to add LIVEKIT_URL, LIVEKIT_API_KEY, LIVEKIT_API_SECRET, OPENAI_API_KEY, DEEPGRAM_API_KEY, CARTESIA_API_KEY
   ```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd assignment/frontend
   ```

2. Copy the example environment file and update with your LiveKit credentials:
   ```bash
   cp env.example .env.local
   # Edit .env.local to add LIVEKIT_URL, LIVEKIT_API_KEY, LIVEKIT_API_SECRET
   ```

3. Install dependencies and start the development server:
   ```bash
   npm install
   npm run dev
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Usage

- Click "Connect" to join the voice assistant session.
- Use the text input to chat or speak to the assistant.
- Receive text and audio responses from the assistant.

## Scripts

- `./setup.sh` - Setup environment and dependencies
- `./start-backend.sh` - Start backend server
- `./start-frontend.sh` - Start frontend server

## Notes

- Ensure all required API keys are set in the respective `.env.local` files.
- The frontend uses Next.js with Tailwind CSS for styling.
- The backend is a Python LiveKit agent running inside a Docker container.

## License

This project is licensed under the MIT License.
