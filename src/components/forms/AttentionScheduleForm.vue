<template>
  <q-card class = "my-card" style = "width:500px;">
    <q-card-section>
      <div class = "text-h6">Horario de Atención</div>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <div class = "row q-pb-lg">
        <div class = "column col-12 q-px-sm">
          <q-input type = "text" v-model = "attention_schedule.days" label = "Días"/>
        </div>
        <div class = "column col-12 col-md-6 q-px-sm">
          <q-input type = "hour" v-model = "attention_schedule.start" label = "Hora de inicio"/>
        </div>
        <div class = "column col-12 col-md-6 q-px-sm">
          <q-input type = "hour" v-model = "attention_schedule.end" label = "Hora de fin"/>
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
import {IAttentionSchedule} from 'src/interfaces/IAttentionSchedule';

const attention_schedule: Ref<IAttentionSchedule> = ref({})
</script>

<style scoped>

</style>
