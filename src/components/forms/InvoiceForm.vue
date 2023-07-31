<template>
  <q-card class = "my-card" style = "width:800px;">
    <q-card-section>
      <div class = "text-h6">Facturar</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <div class = "row">
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "date" v-model = "invoice.date" label = "Fecha"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "invoice.value" label = "Valor"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "invoice.fees" label = "Tarifa"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "invoice.discounts" label = "Descuento"/>
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
import {IInvoice} from 'src/interfaces/IInvoice';

const invoice: Ref<IInvoice> = ref({})
</script>

<style scoped>

</style>