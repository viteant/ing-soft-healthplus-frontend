export interface IMedicalHistories {
    id?: number,
    patient_id?: number,
    doctor_id?: number,
    date?: Date,
    reason?: string,
    diagnosis?: string,
    treatment?: string,
    observations?: string,
}