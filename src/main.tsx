import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import App_2 from './App_2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App_2 />
  </StrictMode>,
)
