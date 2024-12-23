import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import AppForms from './AppForms.jsx'
import AppComponents from './AppComponents.jsx'
// import AppRouting from './AppRouting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <AppForms /> */}
    <AppComponents />
    {/* <AppRouting /> */}
  </StrictMode>,
)
