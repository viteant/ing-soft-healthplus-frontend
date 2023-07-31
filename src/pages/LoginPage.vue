<script setup lang = "ts">
import {IUser} from 'src/interfaces/IUser';
import {ref, Ref} from 'vue';
import useAuth from 'src/hooks/useAuth';
import {useQuasar} from 'quasar';
import {useAuthStore} from 'stores/auth-store';
import {useRouter} from 'vue-router';


const {login} = useAuth()
const $q = useQuasar();
const authStore = useAuthStore()
const $router = useRouter()

const user: Ref = ref<IUser>({})
const letsLogin = () => {
  $q.loading.show()
  login(user.value)
    .then(response => {
      console.log(response)
      authStore.setToken(response.data.authorization, response.data.user)

      $q.notify({
        message: 'Session iniciada',
        type: 'positive',
        position: 'top'
      })

      $router.push('/')

    })
    .finally(() => $q.loading.hide())
}

</script>

<template>
  <q-page class = "row items-center justify-center bg-cyan-7">
    <div class = "col-12">
      <h4 class = "q-mx-auto q-my-lg text-center text-cyan-1" style = "max-width: 400px;">
        Bienvenido a Health+
      </h4>
      <q-card class = "q-mx-auto" style = "width:100%; max-width: 450px">
        <q-toolbar class = "bg-secondary text-white">
          <q-toolbar-title class = "q-my-sm">
            <h5 class = "q-my-none">Inicio de Sesión</h5>
          </q-toolbar-title>
        </q-toolbar>
        <q-separator/>
        <q-card-section>
          <q-form ref = "form">
            <q-input class = "q-my-md" type = "email" v-model = "user.email" label = "Correo electrónico">
              <template v-slot:prepend>
                <q-icon name = "fas fa-envelope" size = "xs" color = "secondary"/>
              </template>
            </q-input>
            <q-input class = "q-my-md" type = "password" v-model = "user.password" label = "Contraseña">
              <template v-slot:prepend>
                <q-icon name = "fas fa-lock" size = "xs" color = "secondary"/>
              </template>
            </q-input>
            <div class = "flex column items-end">
              <q-btn flat color = "primary">
                ¿Olvidó su contraseña?
              </q-btn>
              <q-btn class = "q-mt-sm" flat color = "primary" @click = "$router.push({name:'register'})">
                ¿Aún no tienes una cuenta? Regístrate aquí
              </q-btn>
            </div>

          </q-form>
        </q-card-section>
        <q-card-actions>
          <q-space/>
          <q-btn flat color = "positive" @click = "letsLogin()">
            Iniciar Sesión
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>

</style>
