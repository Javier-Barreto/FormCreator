import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainPage } from './views/MainPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
