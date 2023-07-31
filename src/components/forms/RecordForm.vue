<template>
  <q-card class = "my-card" style = "width:800px;">
    <q-card-section>
      <div class = "text-h6">Registros</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <div class = "row">
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "date" v-model = "record.date" label = "Fecha"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "record.value" label = "Valor"/>
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
        Buscar
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang = "ts">
import {ref, Ref} from 'vue';
import {IRecord} from 'src/interfaces/IRecord';

const record: Ref<IRecord> = ref({})
</script>

<style scoped>

</style>