<script setup lang = "ts">
import {ref, Ref} from 'vue';
import {IAttentionSchedule} from 'src/interfaces/IAttentionSchedule';
import {useQuasar} from 'quasar';
import useAttentionSchedule from 'src/hooks/useAttentionSchedule';

const emit = defineEmits(['onCancel', 'onOk'])
const $q = useQuasar()
const {storeData} = useAttentionSchedule()
const form:Ref = ref(null)

const attention_schedule: Ref<IAttentionSchedule> = ref({})
const days = [
  {value: '1', label: 'Lunes'},
  {value: '2', label: 'Martes'},
  {value: '3', label: 'Miércoles'},
  {value: '4', label: 'Jueves'},
  {value: '5', label: 'Viernes'},
  {value: '6', label: 'Sábado'},
  {value: '0', label: 'Domingo'},
]


const cancelClick = () => emit('onCancel')
const okClick = () => {
  form.value.validate().then((success: boolean) => {
    if (success) {
      $q.loading.show()
      storeData(attention_schedule.value).then(response => {
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
  <q-card class = "my-card" style = "width:900px;">
    <q-card-section>
      <div class = "text-h6">Horario de Atención</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <q-form ref = "form">
        <div class = "row q-pb-lg">
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-select :options = "days"
                      map-options
                      multiple
                      label = "Días"
                      emit-value
                      option-label = "label"
                      option-value = "value"
                      v-model = "attention_schedule.days"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "number" v-model = "attention_schedule.interval"
                     label = "Tiempo por cliente">
              <template v-slot:prepend>
                <q-icon name = "fas fa-clock"/>
              </template>
              <template v-slot:append>
                <p class = "q-ma-none q-pa-none text-subtitle2">min</p>
              </template>
            </q-input>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "time" v-model = "attention_schedule.start" label = "Hora Primera Consulta"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "time" v-model = "attention_schedule.end" label = "Hora Última Consulta"/>
          </div>
        </div>
      </q-form>
    </q-card-section>
    <q-separator/>
    <q-card-actions>
      <q-btn flat color = "negative" @click="cancelClick">
        Cancelar
      </q-btn>
      <q-space/>
      <q-btn flat color = "positive" @click="okClick">
        Aceptar
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<style scoped>

</style>
