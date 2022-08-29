import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './css/global.css'
import { PokemonProvider } from './contexts/PokemonContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>
)
