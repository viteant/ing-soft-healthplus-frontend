import {api} from 'boot/axios';
import {ref, Ref} from 'vue';
import {IAttentionSchedule} from 'src/interfaces/IAttentionSchedule';

const days:string[] = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']

const attention_schedule: Ref = ref<Array<IAttentionSchedule>>([])

const storeData = async (attention_schedule: IAttentionSchedule) => {
  return await (
    !attention_schedule.id ? api.post('doctor/attention-schedule', attention_schedule) : api.put(`doctor/attention-schedule/${attention_schedule?.id}`, attention_schedule)
  );
}
const syncDatabaseData = async () => await api.get('doctor/attention-schedule')
  .then(response => attention_schedule.value = response.data)

const destroyData = async (attention_schedule_id: number) => await api.delete(`doctor/attention-schedule /${attention_schedule_id}`)


export default () => ({
  attention_schedule,
  days,
  storeData,
  syncDatabaseData,
  destroyData
})
