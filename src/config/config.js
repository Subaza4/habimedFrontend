// src/config/config.js

const dev = {
    API: {
        BASE_URL: 'http://localhost:8080',
        TIMEOUT: 5000,
        ENDPOINTS: {
            AUTH: '/seguridad',
            PERSONA: '/persona',
            USUARIO: '/usuario',
            RESENIA: '/resenia'
        }
    },
    SERVICES: {
        HABIMED_SERVICE: 'http://localhost:8080/',
        USER_SERVICE: 'http://localhost:8080/usuarios/',
        PERSONA_SERVICE: 'http://localhost:8080/personas/',
        AUTH_SERVICE: 'http://localhost:8080/seguridad/'
    },
    AUTH: {
        TOKEN_NAME: 'habimedToken'
    },
    ROUTES: {
        LOGIN: '/login',
        HOME: '/home',
        PERSONA: '/persona',
        REGISTRO: '/registrarse'
    }
};

const prod = {
    API: {
        BASE_URL: 'https://api.habimed.com',
        TIMEOUT: 5000,
        ENDPOINTS: {
            AUTH: '/seguridad',
            PERSONA: '/persona',
            USUARIO: '/usuario',
            RESENIA: '/resenia'
        }
    },
    SERVICES: {
        HABIMED_SERVICE: 'https://api.habimed.com/',
        USER_SERVICE: 'https://api.habimed.com/usuarios/',
        PERSONA_SERVICE: 'https://api.habimed.com/personas/',
        AUTH_SERVICE: 'https://api.habimed.com/seguridad/'
    },
    AUTH: {
        TOKEN_NAME: 'habimedToken'
    },
    ROUTES: {
        LOGIN: '/login',
        HOME: '/home',
        PERSONA: '/persona',
        REGISTRO: '/registrarse'
    }
};

const qa = {
    API: {
        BASE_URL: 'https://qa.habimed.com',
        TIMEOUT: 5000,
        ENDPOINTS: {
            AUTH: '/seguridad',
            PERSONA: '/persona',
            USUARIO: '/usuario',
            RESENIA: '/resenia'
        }
    },
    SERVICES: {
        HABIMED_SERVICE: 'https://qa.habimed.com/',
        USER_SERVICE: 'https://qa.habimed.com/usuarios/',
        PERSONA_SERVICE: 'https://qa.habimed.com/personas/',
        AUTH_SERVICE: 'https://qa.habimed.com/seguridad/'
    },
    AUTH: {
        TOKEN_NAME: 'habimedToken'
    },
    ROUTES: {
        LOGIN: '/login',
        HOME: '/home',
        PERSONA: '/persona',
        REGISTRO: '/registrarse'
    }
};

const getEnvironmentConfig = () => {
    switch (process.env.REACT_APP_STAGE) {
        case 'production':
            return prod;
        case 'qa':
            return qa;
        default:
            return dev;
    }
};

const constants = {
    APP_VERSION: '1.0.0',
    COPYRIGHT_YEAR: '2024',
    COMPANY_NAME: 'Habimed',
    DATE_FORMAT: 'YYYY-MM-DD',
    PAGINATION: {
        DEFAULT_PAGE_SIZE: 10,
        PAGE_SIZE_OPTIONS: [10, 20, 50, 100]
    },
    ROLES: {
        ADMIN: 'ADMIN',
        USER: 'USER',
        DOCTOR: 'DOCTOR'
    }
};

const config = {
    ...getEnvironmentConfig(),
    constants
};

export default config;