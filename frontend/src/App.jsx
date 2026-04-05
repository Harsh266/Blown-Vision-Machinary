import './App.css'
import Navbar from './components/Navbar'
import Cta from './components/Cta'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Cta />

      <Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default App