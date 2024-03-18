import React, { useState } from 'react';

function MensajeComponente({ mensaje }) {
  const [mensajeState, setMensajeState] = useState(mensaje);

  return (
    <div>
      <p className='font-bold flex justify-center text-[50px] bg-red-500 ml-5 mx-5 p-5 border-4 border-black rounded-xl underline text-white'>{mensajeState}</p>
    </div>
  );
}

export default MensajeComponente;