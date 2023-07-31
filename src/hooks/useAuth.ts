import {api} from 'boot/axios';
import {IPatient} from 'src/interfaces/IPatient';
import {IUser} from 'src/interfaces/IUser';

const registerUser = async (user: IPatient) => {
  return await api.post('auth/register', user)
}

const login = async (user: IUser) => {
  return await api.post('auth/login', user)
}


export default () => ({
  registerUser,
  login
})
