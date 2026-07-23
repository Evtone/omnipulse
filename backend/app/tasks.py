from celery import Celery

celery_app = Celery(
    "omnipulse",
    broker="redis://localhost:6379/0",
    backend="redis://localhost:6379/0",
)


@celery_app.task(name="backfill_patient_history")
def backfill_patient_history(patient_id: str) -> str:
    return f"Backfill queued for {patient_id}"
