import './App.css'
import Navbar from './components/Navbar'
import Cta from './components/Cta'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Cta />
      <Footer />

      <Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default App