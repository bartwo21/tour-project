import './App.scss'
import { Outlet } from 'react-router-dom'
import Navbar from './constants/navbar/navbar'
import Footer from './constants/footer/footer'

function App() {
  return (
    <div className='app'>
      <Navbar />
        <Outlet />  
      <Footer />
    </div>
  )
}

export default App
