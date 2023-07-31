<template>
  <q-card class = "my-card" style = "width:800px;">
    <q-card-section>
      <div class = "text-h6">Paciente</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <div class = "row">
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "patient.dni" label = "Cédula de Identidad"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "patient.phone" label = "Teléfono"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-input type = "text" v-model = "patient.address" label = "Dirección"/>
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
import {IPatient} from 'src/interfaces/IPatient';

const patient: Ref<IPatient> = ref({})
</script>

<style scoped>

</style>