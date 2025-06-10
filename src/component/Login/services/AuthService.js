import config from '../../../config/config';
import axios from 'axios';

// Configuración global de axios
axios.defaults.baseURL = config.API.BASE_URL;
axios.defaults.timeout = config.API.TIMEOUT;

export class AuthService {
    static async login(credenciales) {
        try {
            const response = await axios.post(`${config.API.ENDPOINTS.AUTH}/login`, {
                usuario: credenciales.usuario,
                contrasenia: credenciales.contrasenia,
                token: credenciales.token
            });
            
            if (response.data.status === 'OK') {
                localStorage.setItem(config.AUTH.TOKEN_NAME, response.data.salida.token);
            }
            
            return response.data;
        } catch (error) {
            throw new Error('Error en el inicio de sesión: ' + error.message);
        }
    }
}