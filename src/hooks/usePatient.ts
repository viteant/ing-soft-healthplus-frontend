import {api} from 'boot/axios';
import {ref, Ref} from 'vue';
import {IPatient} from 'src/interfaces/IPatient';
import patientTable from 'src/data/PatientTable';

const patients: Ref = ref<Array<IPatient>>([])


const syncDatabaseData =  () => api.get('user/patient')
  .then(response => patients.value = response.data)

const destroyData = async (patient_id: number) => await api.delete(`user/patient/${patient_id}`)

syncDatabaseData();
export default () => ({
  patients,
  columns: patientTable,
  syncDatabaseData,
  destroyData
})
