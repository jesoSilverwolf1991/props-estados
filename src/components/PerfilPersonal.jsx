import React, { useState } from 'react';

import Tarjeta from '../assets/image/tarjeta.jpg'

function PerfilPersonal({ nombre, edad, descripcion }) {
  const [descripcionVisible, setDescripcionVisible] = useState(false);

  const toggleDescripcion = () => {
    setDescripcionVisible(!descripcionVisible);
  };

  return (
    <div className="perfil-tarjeta m-5 grid justify-center ">
        <div className='p-5 border-2 border-black grid justify-center w-[250px] rounded-lg bg-gray-200'>
        <img className='w-full h-70 rounded-t-lg   ' src={Tarjeta} alt="Personal" />
     <div className='grid justify-center border  border-black w-[220px] bg-white' >
      <h2 className='font-bold '>{nombre}</h2>
      <p className='font-bold' >Edad: {edad}</p>
      <button  className='font-bold m-5 underline' onClick={toggleDescripcion}>
        {descripcionVisible ? 'Ocultar Descripción' : 'Mostrar Descripción'}
      </button>
      {descripcionVisible && <p>{descripcion}</p>}
      </div>
      </div>
    </div>
  );
}

export default PerfilPersonal;
