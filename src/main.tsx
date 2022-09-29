import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './Application'
import Structure from "./Componentes/structure";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Structure>
      <Application />
    </Structure>
  </React.StrictMode>
)
