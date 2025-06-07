import React, {useState} from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import {Persona} from './interface/Persona';

const Persona = () => {
    const [persona, setPersona] = useState(new Persona('', ''))

    return (
        <div className="wrapper">
            se logrs
        </div>
    )
}

export default Persona;