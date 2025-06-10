import React from 'react';
import { useFormik } from 'formik';
import { PersonaModel } from '../../interfaces/persona/PersonaModel';
import { personaValidationSchema } from './personaValidationSchema';
import { PersonaService } from './service/PersonaService';

const PersonaForm = () => {
    const formik = useFormik({
        initialValues: new PersonaModel('', '', '', '', '', '', ''),
        validationSchema: personaValidationSchema,
        onSubmit: async (values) => {
            try {
                await PersonaService.crearPersona(values);
                alert('Persona creada exitosamente');
            } catch (error) {
                alert(error.message);
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="dni">DNI:</label>
                <input
                    id="dni"
                    name="dni"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.dni}
                />
                {formik.errors.dni && formik.touched.dni ? (
                    <div>{formik.errors.dni}</div>
                ) : null}
            </div>
            {/* Añadir campos similares para el resto de propiedades */}
            <button type="submit">Guardar</button>
        </form>
    );
};

export default PersonaForm;