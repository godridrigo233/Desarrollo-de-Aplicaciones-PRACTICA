import React, { Component } from 'react';

class GestionPersonas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: [
        { nombre: 'Carlos', ocupacion: 'Ingeniero' },
        { nombre: 'Ana', ocupacion: 'Doctora' }
      ],
      nuevaPersona: { nombre: '', ocupacion: '' }
    };
  }

  manejarCambio = (e) => {
    const { name, value } = e.target;
    this.setState({
      nuevaPersona: { ...this.state.nuevaPersona, [name]: value }
    });
  };

  agregarPersona = () => {
    this.setState({
      personas: [...this.state.personas, this.state.nuevaPersona],
      nuevaPersona: { nombre: '', ocupacion: '' }
    });
  };

  render() {
    return (
      <div>
        <h1>Gestión de Personas con Clases</h1>
        <ul>
          {this.state.personas.map((persona, index) => (
            <li key={index}>{persona.nombre} - {persona.ocupacion}</li>
          ))}
        </ul>
        <h2>Agregar Persona</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={this.state.nuevaPersona.nombre}
          onChange={this.manejarCambio}
        />
        <input
          type="text"
          name="ocupacion"
          placeholder="Ocupación"
          value={this.state.nuevaPersona.ocupacion}
          onChange={this.manejarCambio}
        />
        <button onClick={this.agregarPersona}>Agregar Persona</button>
      </div>
    );
  }
}

export default GestionPersonas;
