import {IUser} from 'src/interfaces/IUser';

export interface IAdministrative {
  id?: number,
  user?: IUser,
  user_id?: number,
  department?: string,
  position?: string,
  salary?: number,
}
