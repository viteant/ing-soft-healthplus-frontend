export default {
  required: (v: unknown) => !!v || 'Este campo es requerido'
}
