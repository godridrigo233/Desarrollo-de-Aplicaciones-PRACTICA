import React, { useState, useEffect } from 'react';
import './App.css';

const Contador = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El contador ha cambiado:", contador);

    return () => {
      console.log("El componente se actualiza");
    };
  }, [contador]);
  return (
    <div>
      <h1>Contador: {contador}
      </h1>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
};
export default Contador;
