import React, { useState } from 'react';

function ContadorPasos({ paso }) {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + paso);
  };

  return (
    <div className='border-4 rounded-lg w-50 grid-cols-2 m-5 p-4 grid justify-items-center border-black bg-green-300'>
      <p className='font-bold'>Contador: {contador}</p>
      <button className='border border-black w-48 hover:bg-white font-bold rounded-lg' onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default ContadorPasos;
