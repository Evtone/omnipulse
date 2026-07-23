# Backend

This backend scaffold provides a FastAPI health endpoint and a basic Celery task entry point for the OmniPulse platform.

## Run locally

- Install dependencies: `pip install -r requirements.txt`
- Start API: `uvicorn app.main:app --reload --port 8000`
- Start Celery worker: `celery -A app.tasks worker --loglevel=info`
