export interface IPatientAppointment {
  id?: number,
  attention_schedule_id?: number,
  patient_id?: number,
  attended?: boolean,
  annulled?: boolean,
}
