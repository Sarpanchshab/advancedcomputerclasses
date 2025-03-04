import { Route, Routes } from 'react-router'
import Footer from './Component/Layout/Footer'
import Navbar from './Component/Layout/Navbar'
import Home from './Component/Home'
import Typing from './Component/Typing'
import Course from './Component/Course'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/typing" element={<Typing/>}/>
      <Route path='/course' element={<Course/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
