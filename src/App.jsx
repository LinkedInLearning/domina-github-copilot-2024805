import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Destinos from './pages/Destinos';
import './App.css'
import HeaderBar from './components/HeaderBar'

function App() {

  function procesar(a, b) {
    var array = [1];
    var nuevoarray = _.concat(array, 2, [3], [[4]]);
    return nuevoarray;
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
        <button onClick={procesar}> Test </button>
      </main>
    </div>
  )
}

export default App
