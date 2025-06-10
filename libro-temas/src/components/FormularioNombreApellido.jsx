import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/FormularioNombreApellido.css";

const FormularioNombreApellido = ({ titulo = "Formulario Nombre y Apellido" }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Navegar a PantallaDestino y pasar los datos
        navigate("/resultado", {
            state: { nombre, apellido }
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="glass-form">
                <h2>{titulo}</h2>

                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Escribe tu nombre"
                    />
                </div>

                <div className="form-group">
                    <label>Apellido</label>
                    <input
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        placeholder="Escribe tu apellido"
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default FormularioNombreApellido;


