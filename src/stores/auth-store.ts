import {defineStore} from 'pinia';
import {ref, Ref} from 'vue';
import {IToken} from 'src/interfaces/IToken';
import {IUser} from 'src/interfaces/IUser';
import {api} from 'boot/axios';

const jwt: string | null = sessionStorage.getItem('jwt');

export const useAuthStore = defineStore('authStore', () => {
  const token: Ref = ref<IToken | null>(jwt ? JSON.parse(jwt) : null)
  const user: Ref = ref<IUser | null>(null)

  async function verifyToken(onTokenError: (message: string) => void) {
    if (!!token.value) {
      await refreshToken(onTokenError)
    } else {
      onTokenError('Token expirado, por favor vuelva a iniciar sesión')
    }
  };

  async function refreshToken(onTokenError: (message: string) => void) {
    api.post('auth/refresh')
      .then(response => {
        user.value = response.data.user
        token.value = response.data.authorization
        setToken(token.value)
      })
      .catch(error => {
        onTokenError(error.response.data.error ?? error.response.data.message)
      })
  };

  function setToken(newToken: IToken, newUser ?: IUser) {
    token.value = newToken
    api.defaults.headers.common['Authorization'] = 'Bearer ' + token.value.token
    sessionStorage.setItem('jwt', JSON.stringify(token.value))
    user.value = newUser
  }

  return {
    token,
    user,
    verifyToken,
    refreshToken,
    setToken
  }
});
