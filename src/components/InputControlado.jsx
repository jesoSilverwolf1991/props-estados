import React, { useState } from 'react';

const InputControlado = ({ placeholderText }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='border-4 border-black grid justify-center w-[300px] p-5 m-5 bg-black text-black'>
      <input
        type="text"
        placeholder={placeholderText}
        value={inputValue}
        onChange={handleInputChange}
      />
      <p className='text-white'>Valor actual del input: {inputValue}</p>
    </div>
  );
};

export default InputControlado;
