import { Route, Routes } from 'react-router'
import Footer from './Component/Layout/Footer'
import Navbar from './Component/Layout/Navbar'
import Home from './Component/Home'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
