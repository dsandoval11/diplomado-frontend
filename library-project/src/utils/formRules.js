export const FORM_RULES = {
  EMAIL: {
    required: 'El campo usuario es requerido.',
    maxLength: {
      value: 40,
      message: 'El campo email debe contener maximo 40 caracteres'
    },
    minLength: {
      value: 8,
      message: 'El campo email debe contener minimo 8 caracteres'
    }
  },
  PASSWORD: {
    required: 'El campo contrasena es requerido.',
    maxLength: {
      value: 15,
      message: 'El campo contrasena debe contener maximo 15 caracteres'
    },
    minLength: {
      value: 8,
      message: 'El campo contrasena debe contener minimo 8 caracteres'
    }
  }
};
