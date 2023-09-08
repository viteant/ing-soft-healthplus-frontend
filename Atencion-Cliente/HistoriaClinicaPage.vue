<script setup lang = "ts">
import columns from 'src/data/DoctorTable';
import {ref, Ref} from 'vue';
import DoctorForm from 'components/forms/DoctorForm.vue';
import useDoctor from 'src/hooks/useDoctor';
import {IDoctor} from 'src/interfaces/IDoctor';
import {useQuasar} from 'quasar';

const {syncDatabaseData, destroyData, doctors} = useDoctor()

const dialog: Ref = ref<boolean>(false)
const table: Ref = ref(null)
const currentData: Ref = ref<IDoctor | null>(null)
const search: Ref = ref(null)
const $q = useQuasar()

const openEditMen = (data: IDoctor) => {
  currentData.value = data
  dialog.value = true
}

const onDelet = ({id}: IDoctor) => {
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

const onSaveDialogo = () => {
  dialog.value = false
  syncDatabaseData()
}

const onCloseDialog = () => {
  dialog.value = false
}

syncDatabaseData()
</script>

<template>
  <q-page class = "q-pa-lg">
    <q-card class = "container-card">
      <q-table
        ref = "table"
        flat
        title = "Doctores"
        :rows = "doctors"
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
              Agregar Doctor
            </q-btn>
          </q-toolbar>
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

  <q-dialog v-model = "dialog" @hide = "syncDatabaseData()">
    <DoctorForm :data = "currentData"
                @on-ok = "onSaveDialog"
                @on-cancel = "onCloseDialog"/>
  </q-dialog>
</template>

<style scoped>

</style>