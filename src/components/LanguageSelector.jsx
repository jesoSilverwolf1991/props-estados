import { useState } from 'react';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  
  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
   
    if (event.target.value === 'es') {
      setTranslatedText('Hola mundo!');
    } else if (event.target.value === 'en') {
      setTranslatedText('Hello world!');
    } else if (event.target.value === 'fr') {
      setTranslatedText('Bonjour le monde!');
    } else if (event.target.value === 'it') {
        setTranslatedText('Ciao mondo!');
      } else if (event.target.value === 'jp') {
        setTranslatedText('ハロー・ワールド!');
    
      } else {
      setTranslatedText('');
    }
  };

  return (
    <div  className='grid justify-center  border border-black w-[250px] m-5 p-5 font-mono '>
      <h2 className='underline'>Selector de Idioma</h2>
      <select className=' border border-black' value={selectedLanguage} onChange={handleChange}>
        <option value="">Seleccione un idioma</option>
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="fr">Francés</option>
        <option value='it'>Italiano</option>
        <option value="jp">Japonés</option>
      </select>
      {selectedLanguage && translatedText && <p>{translatedText}</p>}
    </div>
  );
};

export default LanguageSelector;
