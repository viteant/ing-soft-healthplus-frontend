<template>
  <q-card class = "my-card" style = "width:800px;">
    <q-card-section>
      <div class = "text-h6">Prescripción Médica</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <div class = "row">
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "medical_prescription.medicine" label = "Medicina"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-input type = "textarea" v-model = "medical_prescription.instructions" label = "Instrucciones"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-input type = "textarea" v-model = "medical_prescription.observations" label = "Observaciones"/>
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
import {IMedicalPrescription} from 'src/interfaces/IMedicalPrescription';

const medical_prescription: Ref<IMedicalPrescription> = ref({})
</script>

<style scoped>

</style>