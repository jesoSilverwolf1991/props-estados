import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div className='border-8 rounded-full w-50 grid-cols-2 m-5 p-4 grid justify-items-center border-black bg-blue-600'>
    <h2 className='m-6 grid justify-items-center font-sans text-[30px] text-white '>Contador: {contador}</h2>
     <button className='m-6 jujustify-items-center border border-white rounded-full w-70 p-5  font-monsans text-[30px] text-white hover:bg-black' onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default Contador;