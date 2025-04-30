import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';  // or your local bootstrap

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <link href="/css/bootstrap.min.css" rel="stylesheet"></link> */}
    <App />
  </StrictMode>,
)
