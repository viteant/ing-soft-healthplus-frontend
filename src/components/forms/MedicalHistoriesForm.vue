<template>
  <q-card class = "my-card" style = "width:800px;">
    <q-card-section>
      <div class = "text-h6">Historia Médica</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <div class = "row">
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "date" v-model = "medical_histories.date" label = "Fecha"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-input type = "textarea" rows = "4" v-model = "medical_histories.reason" label = "Razón"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-input type = "textarea" rows = "4" v-model = "medical_histories.diagnosis" label = "Diagnóstico"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-input type = "textarea" rows = "4" v-model = "medical_histories.treatment" label = "Tratamiento"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-input type = "textarea" rows = "4    " v-model = "medical_histories.observations" label = "Observaciones"/>
          </div>
      </div>
    </q-card-section>

    <q-separator />
    <q-card-actions>
      <q-btn flat color = "negative">
        Cancelar
      </q-btn>
      <q-space/>
      <q-btn flat color = "positive">
        Aceptar
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang = "ts">
import {ref, Ref} from 'vue';
import {IMedicalHistories} from 'src/interfaces/IMedicalHistories';

const medical_histories: Ref<IMedicalHistories> = ref({})
</script>

<style scoped>

</style>