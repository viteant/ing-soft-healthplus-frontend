export interface IInvoices {
    id?: number,
    patient_appointment_id?: number,
    patient_id?: number,
    date?: Date,
    value?: number,
    fees?: number,
    discounts?: number
}