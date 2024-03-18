import React, { useState } from 'react';

 export const SelectorIdioma = ({ opcionesIdioma, onIdiomaSeleccionado }) => {
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState('');

  const manejarCambioIdioma = (event) => {
    const nuevoIdiomaSeleccionado = event.target.value;
    setIdiomaSeleccionado(nuevoIdiomaSeleccionado);
    onIdiomaSeleccionado(nuevoIdiomaSeleccionado);
  };

  return (
    <div className='m-5 p-5 grid justify-item-center border-black border-4 w-[300px] font-mono bg-black'>
      <h2 className='font-bold text-white'>Selecciona tu idioma:</h2>
      <select className='border-black hover:bg-white' value={idiomaSeleccionado} onChange={manejarCambioIdioma}>
        {opcionesIdioma.map((idioma, index) => (
          <option key={index} value={idioma}>{idioma}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectorIdioma;
