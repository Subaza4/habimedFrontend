import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginModel } from '../../interfaces/login/LoginModel';
import { AuthService } from './services/AuthService';
import { useNavigate } from 'react-router-dom';
import './index.css';

const LoginForm = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        usuario: Yup.string()
            .required('El usuario es obligatorio'),
        contrasenia: Yup.string()
            .required('La contraseña es obligatoria')
    });

    const formik = useFormik({
        initialValues: new LoginModel('', '', ''),
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await AuthService.login(values);
                if (response.status === 'OK') {
                    // Guardamos el token en localStorage o en un estado global
                    localStorage.setItem('token', response.salida.token);
                    // Redirigimos al usuario a la página principal
                    navigate('/persona');
                } else {
                    setError(response.salidaMsg);
                }
            } catch (error) {
                setError(error.message);
            }
        }
    });

    return (
        <div className="wrapper container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Iniciar Sesión</h2>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <form onSubmit={formik.handleSubmit}>
                                <div className="input-box mb-3">
                                    <label htmlFor="usuario" className="form-label">Usuario</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formik.touched.usuario && formik.errors.usuario ? 'is-invalid' : ''}`}
                                        id="usuario"
                                        name="usuario"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.usuario}
                                    />
                                    {formik.touched.usuario && formik.errors.usuario ? (
                                        <div className="invalid-feedback">{formik.errors.usuario}</div>
                                    ) : null}
                                </div>

                                <div className="input-box mb-3">
                                    <label htmlFor="contrasenia" className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        className={`form-control ${formik.touched.contrasenia && formik.errors.contrasenia ? 'is-invalid' : ''}`}
                                        id="contrasenia"
                                        name="contrasenia"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.contrasenia}
                                    />
                                    {formik.touched.contrasenia && formik.errors.contrasenia ? (
                                        <div className="invalid-feedback">{formik.errors.contrasenia}</div>
                                    ) : null}
                                </div>

                                <button type="submit" className="btn btn-primary w-100" disabled={formik.isSubmitting}>
                                    {formik.isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;