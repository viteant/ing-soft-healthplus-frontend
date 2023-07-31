<template>
  <q-card class = "my-card" style = "width:800px;">
    <q-card-section>
      <div class = "text-h6">Nuevo Certificado</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <div class = "row">
          <div class = "column col-12 q-px-sm">
            <q-input type = "date" v-model = "medical_certificate.date" label = "Fecha de certificado"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-input type = "text" v-model = "medical_certificate.description" label = "Descripción"/>
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
import {IMedicalCertificate} from 'src/interfaces/IMedicalCertificate';

const medical_certificate: Ref<IMedicalCertificate> = ref({})
</script>

<style scoped>

</style>
