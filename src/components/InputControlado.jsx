import React, { useState } from 'react';

function InputControlado() {

  const [inputValue, setInputValue] = useState('5');

 
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
     
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />

      <div>Valor actual del input: {inputValue}</div>
    </div>
  );
}

export default InputControlado;
