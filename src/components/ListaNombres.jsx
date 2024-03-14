import React from 'react';

 export function ListaNombres({ nombres }) {
  return (
    <ul>
          <h1 className='text-[30px] underline grid justify-items-center'>Lista de alumnos </h1>
      {nombres.map((nombre, index) => (
        <li className='grid justify-items-left' key={index}>{nombre}</li>
      ))}
    </ul>
  );
}

export default ListaNombres;