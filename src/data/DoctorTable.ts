import {IAdministrative} from 'src/interfaces/IAdministrative';

export default [
  {
    name: 'fullname',
    label: 'Nombre',
    field: (row: IAdministrative) => row.user?.fullname,
    align: 'left',
    sortable: true
  },
  {
    name: 'user_email',
    label: 'Email',
    field: (row: IAdministrative) => row.user?.email,
    align: 'left',
    sortable: true
  },
  {
    name: 'specialism',
    label: 'Especialidad',
    align: 'left',
    field: 'specialism',
    sortable: true
  },
  {
    name: 'degree',
    label: 'Título',
    align: 'left',
    field: 'degree',
    sortable: true
  },
  {
    name: 'service_price',
    label: 'Precio de Consulta',
    field: 'service_price',
    align: 'left',
    format: (val: number) => `$ ${parseFloat(val + '').toFixed(2)}`,
    sortable: false
  },
  {
    name: 'actions',
    label: 'Acciones',
    sortable: false
  },
];
