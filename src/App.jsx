
import './index.css'
import './components/MensajeComponente.jsx'
import MensajeComponente from './components/MensajeComponente.jsx'
import Contador from './components/Contador.jsx'
import ListaNombres from './components/ListaNombres.jsx'
import CambiaColor from './components/CambiaColor.jsx'
import UsuarioActivo from './components/UsuarioActivo.jsx'
import ContadorPasos from './components/ContadorPasos.jsx'
import PerfilPersonal from './components/PerfilPersonal.jsx'
import InputControlado from './components/InputControlado.jsx'
import SelectorIdioma from './components/SelectorIdioma.jsx'
import ToggleVisibility from './components/ToggleVisibility.jsx'



function App() {
 
  return (
    <>
    <MensajeComponente mensaje={['Hola mundo']} />
    <Contador  inicial={1}/>
   <ListaNombres nombres={['Diana Fernanda','Michael Ferrero','Dylan Cruz,','Penelope Diaz','Francisco Hernandez']} />
   <CambiaColor colorInicial={'[#ff0000 ]'}  />
   <UsuarioActivo nombreUsuario={'Jesus Eduardo Sarmiento Ortiz'}/>
   <ContadorPasos paso={1}/>
   <PerfilPersonal nombre={'Nombre del perfil: Diana Silverwolf'} edad={'33 años'} descripcion={'Tienes habilidades de desempeño de diseñadora gráfico puede manejar programa adobe como illustrator,photoshop,premier, after effect ect. Tambien maneja lenguajes de programación. '}/>
   <InputControlado placeholderText={['Escriba aqui...']} />
  <SelectorIdioma opcionesIdioma={['Español', 'Inglés', 'Francés', 'Japones', 'Italiano','Aleman']}/>
   <ToggleVisibility text={[ 'La película está escrita y dirigida por Alessandro Carloni (director de Kung Fu Panda 3) y Erica Rivinoja (guionista de Trolls, Cloudy with a Chance of Meatballs 2). DNEG Animation es el estudio de animación socio del proyecto, y Daniela Mazzucato y Jared Stern producen para Warner Bros.' ]}/>
    </>
  )
}

export default App
