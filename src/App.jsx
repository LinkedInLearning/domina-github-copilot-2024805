import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Destinos from './pages/Destinos';
import './App.css'
import HeaderBar from './components/HeaderBar'

function App() {

  function sumDigits(a, b) {
    // Ensure the inputs are numbers and return their sum
    return Number(a) + Number(b);
  }

  return (
    <div className="App  container ">

      <HeaderBar />
      <main className='p-4 bg-light'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/destinos" element={<Destinos />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
