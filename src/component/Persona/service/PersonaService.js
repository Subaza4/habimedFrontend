import axios from 'axios';

export class PersonaService {
    static async crearPersona(persona) {
        try {
            const response = await axios.post('/api/personas', persona);
            return response.data;
        } catch (error) {
            throw new Error('Error al crear la persona: ' + error.message);
        }
    }

    static async obtenerPersona(dni) {
        try {
            const response = await axios.get(`/api/personas/${dni}`);
            return response.data;
        } catch (error) {
            throw new Error('Error al obtener la persona: ' + error.message);
        }
    }

    static async actualizarPersona(persona) {
        try {
            const response = await axios.put(`/api/personas/${persona.dni}`, persona);
            return response.data;
        } catch (error) {
            throw new Error('Error al actualizar la persona: ' + error.message);
        }
    }
}