import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Rootlayout from './component/Layout/Rootlayout'
import Brands from './Pages/Brands'


const App = () => {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path='/' element={<Rootlayout/>}>
         <Route path='/brands' element={<Brands/>}/>
         <Route path='/inspire' element={<h1>inspire</h1>}/>
         <Route path='/adspend' element={<h1>adspend</h1>}/>
         <Route path='/marketIntelligence' element={<h1>marketIntelligence</h1>}/>
         <Route path='/trackbrand' element={<h1>trackbrand</h1>}/>
         <Route path='/briefmodule' element={<h1>briefmodule</h1>}/>
         <Route path='/setting' element={<h1>setting</h1>}/>
         <Route path='/invite' element={<h1>invite</h1>}/>
         <Route path='/inspire' element={<h1>inspire</h1>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
