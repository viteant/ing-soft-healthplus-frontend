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
    name: 'department',
    label: 'Departamento',
    align: 'left',
    field: 'department',
    sortable: true
  },
  {
    name: 'position',
    label: 'Cargo',
    align: 'left',
    field: 'position',
    sortable: true
  },
  {
    name: 'salary',
    label: 'Sueldo',
    field: 'salary',
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
