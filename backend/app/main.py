from fastapi import FastAPI

app = FastAPI(title="OmniPulse API", version="0.1.0")


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/vitals/{patient_id}")
def get_vitals(patient_id: str) -> dict[str, object]:
    return {"patientId": patient_id, "metrics": []}


@app.get("/api/labs/{patient_id}")
def get_labs(patient_id: str) -> dict[str, object]:
    return {"patientId": patient_id, "labs": []}
