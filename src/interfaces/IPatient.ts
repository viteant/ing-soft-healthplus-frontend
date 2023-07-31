import {IUser} from 'src/interfaces/IUser';

export interface IPatient {
  id?: number,
  user?: IUser,
  user_id?: number,
  address?: string,
  phone?: string,
  dni?: string,
  billing_name?: string,
  billing_address?: string,
  billing_phone?: string,
  billing_document?: string
}
