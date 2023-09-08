<script setup lang = "ts">
import usePatient from 'src/hooks/usePatient';
import {ref, Ref} from 'vue';
import {IPatient} from 'src/interfaces/IPatient';
import {useQuasar} from 'quasar';

const table: Ref = ref(null)
const search: Ref = ref(null)
const {patients, columns, destroyData, syncDatabaseData} = usePatient()
const $q = useQuasar()

const onDelete = ({id}: IPatient) => {
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
        title = "Pacientes"
        :rows = "patients"
        :columns = "columns"
        row-key = "name"
        :filter = "search"
      >
        <template v-slot:body-cell-actions = "props">
          <q-td :props = "props">
            <q-btn icon = "fas fa-ellipsis-vertical" flat size = "xs">
              <q-menu>
                <q-list dense style = "min-width: 150px">
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
</template>

<style scoped>

</style>
