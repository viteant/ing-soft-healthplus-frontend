import {api} from 'boot/axios';
import {IAdministrative} from 'src/interfaces/IAdministrative';
import {ref, Ref} from 'vue';

const administratives: Ref = ref<Array<IAdministrative>>([])

const departments = [
  'Finanzas',
  'Administración',
  'Recursos Humanos',
  'Sistemas',
];

const positions = [
  'Gerente',
  'Director',
  'Supervisor',
  'Empleado',
];

const storeAdministrativeUser = async (user: IAdministrative) => {
  return await (
    !user.id ? api.post('user/administrative', user) : api.put(`user/administrative/${user?.id}`, user)
  );
}
const syncDatabaseData = async () => await api.get('user/administrative')
  .then(response => administratives.value = response.data)

const destroyData = async (administrative_id: number) => await api.delete(`user/administrative/${administrative_id}`)


export default () => ({
  positions,
  departments,
  administratives,
  storeAdministrativeUser,
  syncDatabaseData,
  destroyData
})
