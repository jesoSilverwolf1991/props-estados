import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='grid justify-items-center border-4 border-black w-[300px] m-5 p-5 bg-blue-500 text-white font-black'>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Ocultar texto' : 'Mostrar texto'}
      </button>
      {isVisible && <p>Este es el texto que se muestra o se oculta.</p>}
    </div>
  );
}

export default ToggleVisibility;
