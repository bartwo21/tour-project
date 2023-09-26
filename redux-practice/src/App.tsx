import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'

function App() {

  return (
    <>
    <nav>
      
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
