import {api} from 'boot/axios';
import {ref, Ref} from 'vue';
import {IDoctor} from 'src/interfaces/IDoctor';

const degree: Array<string> = [
  'Médico',
  'Master',
  'Doctor',
];

const specialism: Array<string> = [
  'Medicina General',
  'Ginecología',
  'Obstetricia',
  'Nutrición',
  'Psicología',
  'Pediatría',
];

const doctors: Ref = ref<Array<IDoctor>>([])

const storeData = async (doctor: IDoctor) => {
  return await (
    !doctor.id ? api.post('user/doctor', doctor) : api.put(`user/administrative/${doctor?.id}`, doctor)
  );
}
const syncDatabaseData = async () => await api.get('user/doctor')
  .then(response => doctors.value = response.data)

const destroyData = async (doctor_id: number) => await api.delete(`user/doctor/${doctor_id}`)


export default () => ({
  doctors,
  degree,
  specialism,
  storeData,
  syncDatabaseData,
  destroyData
})
