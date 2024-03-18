import React, { useState } from 'react';

function Contador({ inicial }) {
  const [count, setCount] = useState(inicial);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <div className='border-4 rounded-lg w-50 grid-cols-2 m-5 p-4 grid justify-items-center border-black bg-blue-300'>
      <h2 className='font-bold'  >Contador: {count}</h2>
      <button className='border border-black w-48 hover:bg-white font-bold rounded-lg' onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;
