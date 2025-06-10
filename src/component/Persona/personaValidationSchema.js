import * as Yup from 'yup';

export const personaValidationSchema = Yup.object().shape({
    dni: Yup.number()
        .required('El DNI es obligatorio')
        .min(10000000, 'El DNI debe tener al menos 8 dígitos'),
    nombre: Yup.string()
        .required('El nombre no puede estar vacío'),
    apellidos: Yup.string()
        .required('Los apellidos no pueden estar vacíos'),
    correo: Yup.string()
        .email('El correo electrónico no es válido'),
    celular: Yup.string(),
    direccion: Yup.string(),
    fecha_nacimiento: Yup.date()
        .max(new Date(), 'La fecha de nacimiento debe ser en el pasado')
        .required('La fecha de nacimiento es obligatoria')
});
