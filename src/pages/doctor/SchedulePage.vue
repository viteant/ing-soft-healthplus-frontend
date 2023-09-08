<script setup lang = "ts">
import {ref, Ref} from 'vue';
import AttentionScheduleForm from 'components/forms/AttentionScheduleForm.vue';
import useAttentionSchedule from 'src/hooks/useAttentionSchedule';
import columns from 'src/data/AttentionScheduleTable';
import {IAttentionSchedule} from 'src/interfaces/IAttentionSchedule';
import {useQuasar} from 'quasar';

const {syncDatabaseData, attention_schedule, days, destroyData} = useAttentionSchedule()
const dialog: Ref = ref(false)
const table: Ref = ref(null)
const search: Ref = ref(null)
const currentData: Ref<IAttentionSchedule | null> = ref(null)

const $q = useQuasar()


syncDatabaseData()

const updateDataTable = () => {
  dialog.value = false
  syncDatabaseData()
}

const openEditMenu = (data: IAttentionSchedule) => {
  currentData.value = data
  dialog.value = true
}

const onDelete = ({id}: IAttentionSchedule) => {
  if (!!id) {
    $q.dialog({
      title: 'Confirm',
      message: '¿Deseas eliminar este registro?',
      class: 'bg-negative',
      dark: true,
      cancel: true,
      persistent: true
    }).onOk(() => {
      $q.loading.show()
      destroyData(id)
        .then(response => {
          syncDatabaseData()
          $q.notify({
            message: response.data.message,
            type: 'positive',
            position: 'top'
          })
        })
        .catch(error => {
          $q.notify({
            message: error.response.data?.error ?? error.response.data?.message,
            type: 'positive',
            position: 'top'
          })
        })
        .finally(() => $q.loading.hide())
    })
  }

}

</script>

<template>
  <q-page class = "q-pa-lg">
    <q-card class = "container-card">
      <q-table
        ref = "table"
        flat
        title = "Horario de Atención"
        :rows = "attention_schedule"
        :columns = "columns"
        row-key = "name"
        :filter = "search"
      >
        <template v-slot:top>
          <q-toolbar class = "q-px-none">
            <q-toolbar-title>
              {{ table?.title }}
            </q-toolbar-title>
          </q-toolbar>
          <q-toolbar class = "q-px-none">
            <q-input label = "Buscar" v-model = "search" style = "width: 300px"/>
            <q-space/>
            <q-btn outline color = "positive" @click = "dialog=true">
              <q-icon size = "xs" name = "fas fa-plus" class = "q-pr-sm"/>
              Agregar nuevo horario
            </q-btn>
          </q-toolbar>
        </template>

        <template v-slot:body-cell-days = "{row}">
          <q-td>
            <q-chip color = "secondary" text-color = "white" size = "md" v-for = "day in row.days?.map(el => days[el])"
                    v-bind:key = "day">
              {{ day }}
            </q-chip>
          </q-td>
        </template>

        <template v-slot:body-cell-actions = "props">
          <q-td :props = "props">
            <q-btn icon = "fas fa-ellipsis-vertical" flat size = "xs">
              <q-menu>
                <q-list dense style = "min-width: 150px">
                  <q-item clickable v-close-popup @click = "openEditMenu(props.row)">
                    <q-item-section avatar>
                      <q-icon name = "fas fa-edit" size = "15px"/>
                    </q-item-section>
                    <q-item-section>Editar</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click = "onDelete(props.row)">
                    <q-item-section avatar>
                      <q-icon name = "fas fa-trash" size = "15px"/>
                    </q-item-section>
                    <q-item-section>Eliminar</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </q-card>
  </q-page>

  <q-dialog v-model = "dialog" style = "max-width: 700px">
    <AttentionScheduleForm :data = "currentData" @on-cancel = "dialog=false" @on-ok = "updateDataTable"/>
  </q-dialog>
</template>

<style scoped>

</style>
