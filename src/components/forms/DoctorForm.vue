<script setup lang = "ts">
import {PropType, ref, Ref} from 'vue';
import {IDoctor} from 'src/interfaces/IDoctor';
import rules from 'src/data/rules';
import {useQuasar} from 'quasar';
import useDoctor from 'src/hooks/useDoctor';

const emit = defineEmits(['onOk', 'onCancel'])
const props = defineProps({
  data: {type: Object as PropType<IDoctor>, required: false},
})

const doctor: Ref = ref<IDoctor>(props.data ?? {user: {}})
const form: Ref = ref(null)

const {storeData, specialism, degree} = useDoctor()

const $q = useQuasar();

const cancelClick = () => emit('onCancel')
const okClick = () => {
  form.value.validate().then((success: boolean) => {
    if (success) {
      $q.loading.show()
      storeData(doctor.value).then(response => {
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
      <div class = "text-h6">Doctor</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <q-form ref = "form">
        <div class = "row q-pb-lg">
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "doctor.user!.fullname"
                     :readonly = "!!doctor.user_id"
                     :rules = "[rules.required]"
                     label = "Nombre"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "email" v-model = "doctor.user!.email"
                     :readonly = "!!doctor.user_id"
                     :rules = "[rules.required]" label = "Email"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-select :options = "specialism" v-model = "doctor.specialism" label = "Especialidad"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-select :options = "degree" v-model = "doctor.degree" label = "Grado"/>
          </div>
          <div class = "column col-12 q-px-sm q-mt-md">
            <q-input type = "number" v-model = "doctor.service_price" label = "Precio de Consulta"/>
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
