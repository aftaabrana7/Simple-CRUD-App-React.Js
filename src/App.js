import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App