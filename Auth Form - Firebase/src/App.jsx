import { useState } from 'react'
import './App.css'
import Login from './Components/Screens/Login'
import Signup from './Components/Screens/Signup'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Dashboard from './Components/Screens/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
        <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
    </>
  )
}

export default App
