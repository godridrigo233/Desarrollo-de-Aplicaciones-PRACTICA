import React, { useState, useEffect } from 'react';

const GestionHooks = () => {
  const [personas, setPersonas] = useState([
    { nombre: 'Carlos', ocupacion: 'Ingeniero' },
    { nombre: 'Ana', ocupacion: 'Doctora' }
  ]);

  const [nuevaPersona, setNuevaPersona] = useState({ nombre: '', ocupacion: '' });

  const agregarPersona = () => {
    setPersonas([...personas, nuevaPersona]);
    setNuevaPersona({ nombre: '', ocupacion: '' });
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevaPersona({ ...nuevaPersona, [name]: value });
  };

  useEffect(() => {
    console.log('La lista de personas ha cambiado', personas);
  }, [personas]);

  return (
    <div>
      <h1>Gestión de Personas con Hooks</h1>
      <ul>
        {personas.map((persona, index) => (
          <li key={index}>{persona.nombre} - {persona.ocupacion}</li>
        ))}
      </ul>
      <h2>Agregar Persona</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={nuevaPersona.nombre}
        onChange={manejarCambio}
      />
      <input
        type="text"
        name="ocupacion"
        placeholder="Ocupación"
        value={nuevaPersona.ocupacion}
        onChange={manejarCambio}
      />
      <button onClick={agregarPersona}>Agregar Persona</button>
    </div>
  );
};

export default GestionHooks;
