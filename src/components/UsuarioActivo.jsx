import React, { useState } from 'react';

const UsuarioActivo = ({ nombreUsuario }) => {
  const [activo, setActivo] = useState(false);

  const toggleEstado = () => {
    setActivo(!activo);
  };

  return (
    <div className=' border-4 border-blue-400 bg-black text-white m-5 p-5 w-[180px] h-[200px] font-bold  '>
      <h2 className=''>Nombre de usuario:  {nombreUsuario}</h2>
      <p>Estado: {activo ? 'Activo' : 'Inactivo'}</p>
      <button className='flex justify-center' onClick={toggleEstado}>
        {activo ? 'Desactivar' : 'Activar'}
      </button>
    </div>
  );
};

export default UsuarioActivo;
