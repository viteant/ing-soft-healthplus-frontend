import {IUser} from 'src/interfaces/IUser';

export interface IDoctor {
  id?: number,
  user?: IUser,
  user_id?: number,
  specialism?: string,
  degree?: string,
  service_price?: number
}
