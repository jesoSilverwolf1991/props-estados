
import './index.css'
import './components/Mensaje'
import Mensaje from './components/Mensaje.jsx'
import './components/Contador.jsx'
import Contador from './components/Contador.jsx'
import ListaNombres from './components/ListaNombres.jsx'
import CambiaColor from './components/CambiaColor.jsx'
import UsuarioActivo from './components/UsuarioActivo.jsx'
import ContadorPasos from './components/ContadorPasos.jsx'
import PerfilPersonal from './components/PerfilPersonal.jsx'
import InputControlado from './components/InputControlado.jsx'
import LanguageSelector from './components/LanguageSelector.jsx'
import ToggleVisibility from './components/ToggleVisibility.jsx'



function App() {
 
  return (
    <>
    <Mensaje />
    <Contador />
   <ListaNombres nombres={['Diana Fernanda','Michael Ferrero','Dylan Cruz,','Penelope Diaz','Francisco Hernandez']} />
   <CambiaColor />
   <UsuarioActivo nombreUsuario={'Jesus Eduardo Sarmiento Ortiz'}/>
   <ContadorPasos paso={1}/>
   <PerfilPersonal nombre={'Nombre del perfil: Diana Silverwolf'} edad={'33 años'} descripcion={'Tienes habilidades de desempeño de diseñadora gráfico puede manejar programa adobe como illustrator,photoshop,premier, after effect ect. Tambien maneja lenguajes de programación. '}/>
   <InputControlado  />
  <LanguageSelector/>
   <ToggleVisibility/>
    </>
  )
}

export default App
