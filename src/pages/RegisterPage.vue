<script setup lang = "ts">

import rules from 'src/data/rules';
import {ref, Ref} from 'vue';
import {IPatient} from 'src/interfaces/IPatient';
import useAuth from 'src/hooks/useAuth';
import {useQuasar} from 'quasar';
import {useRouter} from 'vue-router';


const {registerUser} = useAuth()
const $q = useQuasar()
const $router = useRouter()


const patient: Ref = ref<IPatient>({
  user: {}
})
const form: Ref = ref(null)

const letRegisterUser = () => {
  form.value.validate().then((success: boolean) => {
    if (success) {
      $q.loading.show()
      registerUser(patient.value).then(response => {
        $router.push({name: 'login'})
        $q.notify({
          message: response.data.message,
          type: 'positive',
          position: 'top'
        })
      })
        .catch(error => {
          $q.notify({
            message: error.request.data?.error ?? error.request.data?.message,
            type: 'negative',
            position: 'top'
          })
        })
        .finally(() => $q.loading.hide())
    }
  })

}

const confirmPassword: Ref = ref('')

</script>

<template>
  <q-page class = "row items-center justify-center bg-cyan-7">
    <div class = "col-12">
      <q-card class = "q-mx-auto" style = "width:100%; max-width: 600px">
        <q-toolbar class = "bg-secondary text-white">
          <q-toolbar-title class = "q-my-sm">
            <h5 class = "q-my-none">Registro de Usuario</h5>
          </q-toolbar-title>
        </q-toolbar>
        <q-separator/>
        <q-card-section>
          <q-form ref = "form">
            <div class = "row">
              <div class = "col-12 col-md-6 q-px-sm">
                <q-input type = "text" v-model = "patient.user!.fullname"
                         :readonly = "!!patient.user_id"
                         :rules = "[rules.required]"
                         label = "Nombre"/>
              </div>
              <div class = "col-12 col-md-6 q-px-sm">
                <q-input type = "email" v-model = "patient.user!.email"
                         :readonly = "!!patient.user_id"
                         :rules = "[rules.required]" label = "Email"/>
              </div>
              <div class = "col-12 col-md-6 q-px-sm">
                <q-input type = "text" v-model = "patient.dni" :rules = "[rules.required]"
                         label = "Cédula de Identidad"/>
              </div>
              <div class = "col-12 col-md-6 q-px-sm">
                <q-input type = "text" v-model = "patient.phone" :rules = "[rules.required]" label = "Teléfono"/>
              </div>
              <div class = "col-12 q-px-sm">
                <q-input type = "text" v-model = "patient.address" :rules = "[rules.required]" label = "Dirección"/>
              </div>
              <div class = "col-12 col-md-6 q-px-sm">
                <q-input type = "password" v-model = "patient.user!.password" :rules = "[rules.required]"
                         label = "Contraseña"/>
              </div>
              <div class = "col-12 col-md-6 q-px-sm">
                <q-input type = "password" v-model = "confirmPassword"
                         :rules = "[
                           rules.required,
                           (v)=>v==patient.user!.password || 'La contraseña no coincide'
                         ]"
                         label = "Confirmar Contraseña"/>
              </div>
              <div class = "col-12 q-px-sm q-mb-lg">
                <h6 class = "q-my-none q-mt-lg">Datos de Facturación:</h6>
                <q-separator/>
              </div>
              <div class = "col-12 q-px-sm">
                <q-input type = "text" v-model = "patient.billing_name" :rules = "[rules.required]"
                         label = "¿A nombre de?"/>
              </div>
              <div class = "col-12 col-md-6 q-px-sm">
                <q-input type = "text" v-model = "patient.billing_document" :rules = "[rules.required]"
                         label = "Cédula de Identidad/RUC"/>
              </div>
              <div class = "col-12 col-md-6 q-px-sm">
                <q-input type = "text" v-model = "patient.billing_phone" :rules = "[rules.required]"
                         label = "Teléfono"/>
              </div>
              <div class = "col-12 q-px-sm">
                <q-input type = "text" v-model = "patient.billing_address" :rules = "[rules.required]"
                         label = "Dirección"/>
              </div>
            </div>
          </q-form>
        </q-card-section>
        <q-card-actions>
          <q-btn flat color = "warning" @click = "$router.push({name:'login'})">
            Volver
          </q-btn>
          <q-space/>
          <q-btn flat color = "positive" @click = "letRegisterUser()">
            Registrarme
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>

</style>
