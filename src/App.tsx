import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Navbar from './constants/navbar/navbar'

function App() {

  return (
    <div className='app'>
    <nav>
      <Navbar />
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
