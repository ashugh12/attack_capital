# syntax=docker/dockerfile:1

# Use the official UV Python base image with Python 3.11 on Debian Bookworm
ARG PYTHON_VERSION=3.11
FROM ghcr.io/astral-sh/uv:python${PYTHON_VERSION}-bookworm-slim AS base

# Keeps Python from buffering stdout and stderr
ENV PYTHONUNBUFFERED=1

# Create a non-privileged user
ARG UID=10001
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/app" \
    --shell "/sbin/nologin" \
    --uid "${UID}" \
    appuser

# Install build dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    python3-dev \
  && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

# Copy dependency files
COPY pyproject.toml ./
RUN mkdir -p src

# Install dependencies (without lock file for simplicity)
RUN uv sync

# Copy application files
COPY . .

# Change ownership to appuser
RUN chown -R appuser:appuser /app

# Switch to non-privileged user
USER appuser

# Pre-download ML models
RUN uv run src/agent.py download-files

# Run the application
CMD ["uv", "run", "src/agent.py", "start"]
