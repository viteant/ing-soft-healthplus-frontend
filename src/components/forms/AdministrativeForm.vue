<script setup lang = "ts">
import {PropType, ref, Ref} from 'vue';
import {IAdministrative} from 'src/interfaces/IAdministrative';
import useAdministrative from 'src/hooks/useAdministrative';
import rules from 'src/data/rules';
import {useQuasar} from 'quasar';

const emit = defineEmits(['onOk', 'onCancel'])
const props = defineProps({
  administrativeData: {type: Object as PropType<IAdministrative>, required: false},
})


// Verifying if administrative data has a default user value, if you don't have it we put in
const administrative: Ref<IAdministrative> = ref(props.administrativeData ?? {user: {}})
const form: Ref = ref(null)

const {positions, departments, storeAdministrativeUser} = useAdministrative()

const $q = useQuasar();

const cancelClick = () => emit('onCancel')
const okClick = () => {
  form.value.validate().then((success: boolean) => {
    if (success) {
      $q.loading.show()
      storeAdministrativeUser(administrative.value).then(response => {
        $q.notify({
          type: 'positive',
          position: 'top',
          message: response.data.message
        })
        emit('onOk')
      })
        .catch(error => {
          $q.notify({
            type: 'negative',
            position: 'top',
            message: error.response.data?.error ?? error.response.data?.message
          })
        })
        .finally(() => $q.loading.hide())
    }
  })
}

</script>

<template>
  <q-card class = "my-card" style = "width:800px;">
    <q-card-section>
      <div class = "text-h6">Usuario Administrativo</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <q-form ref = "form">
        <div class = "row">
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "administrative.user!.fullname"
                     :readonly = "!!administrative.user_id"
                     :rules = "[rules.required]"
                     label = "Nombre"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "email" v-model = "administrative.user!.email"
                     :readonly = "!!administrative.user_id"
                     :rules = "[rules.required]" label = "Email"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "number" v-model = "administrative.salary" :rules = "[rules.required]" label = "Sueldo"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-select v-model = "administrative.department" :rules = "[rules.required]" :options = "departments"
                      label = "Departamento"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-select v-model = "administrative.position" :rules = "[rules.required]" :options = "positions"
                      label = "Cargo"/>
          </div>
        </div>
      </q-form>
    </q-card-section>

    <q-separator/>
    <q-card-actions>
      <q-btn flat color = "negative" @click = "cancelClick()">
        Cancelar
      </q-btn>
      <q-space/>
      <q-btn flat color = "positive" @click = "okClick()">
        Aceptar
      </q-btn>
    </q-card-actions>
  </q-card>
</template>


<style scoped>

</style>
