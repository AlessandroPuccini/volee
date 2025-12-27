import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Locale from './pages/Locale.jsx'
import Eventi from './pages/Eventi.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/il-locale" element={<Locale />} />
        <Route path="/eventi" element={<Eventi />} />
        <Route path="/chi-siamo" element={<About />} />
        <Route path="/contatti" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
