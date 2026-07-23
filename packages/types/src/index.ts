export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'provider';
}

export interface VitalSigns {
  id: string;
  patientId: string;
  heartRate: number;
  bloodPressure: string;
  timestamp: string;
}

export interface LabResult {
  id: string;
  patientId: string;
  name: string;
  value: string;
  unit?: string;
}

export interface FHIRResource {
  resourceType: string;
  id?: string;
}
