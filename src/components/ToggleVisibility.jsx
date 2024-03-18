import React, { useState } from 'react';

const ToggleVisibility = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='m-5 p-5 grid justify-item-center border-black border-4 w-[250px] font-mono'>
      <button className='m-5 underline text-[30px]' onClick={toggleVisibility}>
        {isVisible ? 'Ocultar texto' : 'Mostrar texto'}
      </button>
      {isVisible && <p>{text}</p>}
    </div>
  );
};

export default ToggleVisibility;
