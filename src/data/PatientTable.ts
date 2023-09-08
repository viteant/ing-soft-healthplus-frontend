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
    name: 'phone',
    field: 'phone',
    label: 'Teléfono',
    align: 'left',
    sortable: false
  },
  {
    name: 'dni',
    field: 'dni',
    label: 'Cédula',
    align: 'left',
    sortable: true
  },
  {
    name: 'actions',
    label: 'Acciones',
    sortable: false
  },
];
