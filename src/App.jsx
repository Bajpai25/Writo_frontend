import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Subscribe from './assets/components/Subscribe'
import Home from './assets/components/Home'
import Maths from './assets/components/Maths'
import Nav from './assets/components/Nav'
import Footer from './assets/components/Footer'
import Physics from './assets/components/Physics'
import Chemistry from './assets/components/Chemistry'
import Live_m from './assets/components/Live_m'
import Live_p from './assets/components/Live_p'
import Live_c from './assets/components/Live_c'
import Signup from './assets/components/Signup'
import Login from './assets/components/Login'


function App() {
  return (
   <>
   <Nav/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/subscribe/maths_zoom" element={<Live_m/>}></Route>
    <Route path='/subscribe/physics_zoom' element={<Live_p/>}></Route>
    <Route path="/subscribe/chemistry_zoom" element={<Live_c/>}></Route>
    <Route path="/subscribe" element={<Subscribe/>}></Route>
    <Route path="/subscribe/maths" element={<Maths/>}></Route>
    <Route path="/subscribe/physics" element={<Physics/>}></Route>
    <Route path="/subscribe/chemistry" element={<Chemistry/>}></Route>
    <Route path="/subscribe/maths/:id" element={<Live_m/>}></Route>
    <Route path="/subscribe/physics/:id" element={<Live_p/>}></Route>
    <Route path="/subscribe/chemistry/:id" element={<Live_c/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
   </Routes>
 <Footer/>
   </>
  )
}

export default App
