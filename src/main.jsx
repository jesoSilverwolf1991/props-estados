import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/MensajeComponente.jsx'
import './components/Contador.jsx'
import './components/ListaNombres.jsx'
import './components/CambiaColor.jsx'
import './components/UsuarioActivo.jsx'
import './components/ContadorPasos.jsx'
import './components/PerfilPersonal.jsx'
import './components/InputControlado.jsx'
import './components/SelectorIdioma.jsx'
import './components/ToggleVisibility.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
