// App.js
import './App.css';
import LoginForm from './component/Login';
import PersonaPage from './component/Persona';
import { Routes, Route } from 'react-router-dom';
import Registrarse from "./component/Registrarse";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/persona" element={<PersonaPage />} />
            <Route path="/registrarse" element={<Registrarse />} />
        </Routes>
    );
}

export default App;