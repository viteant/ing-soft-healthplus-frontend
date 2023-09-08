import {IAttentionSchedule} from 'src/interfaces/IAttentionSchedule';

export default [
  {
    label: 'Días',
    name: 'days',
    field: 'days',
    align: 'left',
    sortable: true
  },
  {
    label: 'Desde',
    name: 'start',
    field: 'start',
    align: 'left',
    sortable: true
  },
  {
    label: 'Hasta',
    name: 'end',
    field: 'end',
    align: 'left',
    sortable: true
  },
  {
    label: 'Intervalo',
    name: 'interval',
    field: (row: IAttentionSchedule) => row.interval + ' min',
    align: 'left',
    sortable: true
  },
  {
    name: 'actions',
    label: 'Acciones',
    sortable: false
  },
];
