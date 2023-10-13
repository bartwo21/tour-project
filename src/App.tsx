import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Navbar from './constants/navbar/navbar'
import Footer from './constants/footer/footer'

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
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default App
