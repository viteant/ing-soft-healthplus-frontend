<template>
  <q-card class = "my-card" style = "width:800px;">
    <q-card-section>
      <div class = "text-h6">Cuenta</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <div class = "row">
          <div class = "column col-12 col-md-6 q-px-sm">
            <q-input type = "text" v-model = "account.code" label = "Código"/>
          </div>
          <div class = "column col-12 q-px-sm">
            <q-input type = "textarea" rows = "3" v-model = "account.plan_description" label = "Descripción del plan"/>
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
import {IAccount} from 'src/interfaces/IAccount';

const account: Ref<IAccount> = ref({})
</script>

<style scoped>

</style>