import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//gets renders everything inside of the ID of 'root' in my index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* THE APP COMPONENTS GETS RENDERED IN THE MAIN COMPONENT HERE */}
    <App />
  </React.StrictMode>,
)
