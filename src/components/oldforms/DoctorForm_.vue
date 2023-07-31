<template>
  <q-card class = "my-card" style = "width:800px;">
    <q-card-section>
      <div class = "text-h6">Nuevo Doctor</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <div class = "row">
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "doctor.specialism" label = "Especialidad"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "doctor.degree" label = "Título"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-input type = "number" v-model = "doctor.service_price" label = "Título"/>
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
import {IDoctor} from 'src/interfaces/IDoctor';

const doctor: Ref<IDoctor> = ref({})
</script>

<style scoped>

</style>