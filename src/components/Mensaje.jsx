import React from 'react';


export const Mensaje = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};


const App = () => {
  const myMessage = "Este es mi mensaje personalizado.";

  return (
    <div className='font-bold grid justify-items-center text-[30px] text-white bg-slate-950 p-5'>
   
      <Mensaje message={myMessage} />
    </div>
  );
};

export default App;
