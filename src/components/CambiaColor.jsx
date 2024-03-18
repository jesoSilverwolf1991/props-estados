import React, { useState } from 'react';

const CambiaColor = ({ colorInicial }) => {
  const [color, setColor] = useState(colorInicial);

  const cambiarColor = () => {
 
    const nuevoColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(nuevoColor);
  };

  return (
    <div
      style={{
        width: '1350px',
        height: '500px',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: '5px',
       margin:'5',
       
      }}
      onClick={cambiarColor}
    >
      <h2 className='text-[50px] font-bold '>Cambia de Color</h2>
    </div>
  );
};

export default CambiaColor;
