import React, { Component } from 'react';
import './App.css';
//Echo por Jose Miguel Tejada Meza
class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={() => this.setState({ contador: this.state.contador + 1 })}>
          Incrementar
        </button>
      </div>
    );
  }
}
export default Contador;
