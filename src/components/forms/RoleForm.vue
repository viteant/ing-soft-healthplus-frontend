<template>
  <q-card class = "my-card" style = "width:800px;">
    <q-card-section>
      <div class = "text-h6">Rol</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <div class = "row">
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "role.date" label = "Rol"/>
          </div>
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "role.value" label = "Permisos"/>
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
import {IRole} from 'src/interfaces/IRole';

const role: Ref<IRole> = ref({})
</script>

<style scoped>

</style>