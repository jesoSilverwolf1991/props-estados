import React, { useState } from 'react';

function CambiaColor() {
  const [color, setColor] = useState('#FFFFFF'); 

  const cambiarColor = () => {
  
    const nuevoColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(nuevoColor);
  };

  return (
   <div className={`flex justify-center items-center h-96 bg-[${color}] bg-[#000000]`}>
    <div
      style={{ backgroundColor: color, width: '1300px', height: '300px', cursor: 'pointer', textAlign: 'center' }}
      onClick={cambiarColor}
    >
      <h2 style={{ textAlign: 'center', paddingTop: '80px', fontFamily:'sans-serif' }}>Haz clic para cambiar el color</h2>
    </div>
    </div>
  );
}

export default CambiaColor;
