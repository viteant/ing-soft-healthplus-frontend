<template>
  <q-card class = "my-card" style = "width:800px;">
    <q-card-section>
      <div class = "text-h6">Laboratorio</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <div class = "row">
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "laboratories.type" label = "Tipo"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "laboratories.status" label = "Estado"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-input type = "textarea" rows = "3" v-model = "laboratories.description" label = "Descripción"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-input type = "textarea" rows = "3" v-model = "laboratories.results" label = "Resultados"/>
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
import {ILaboratories} from 'src/interfaces/ILaboratories';

const laboratories: Ref<ILaboratories> = ref({})
</script>

<style scoped>

</style>