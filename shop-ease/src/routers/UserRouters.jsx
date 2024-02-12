import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLoginPage from '../pages/user/UserLoginPage'
import UserNavbar from '../components/user/navbar/UserNavbar'
import Registration from '../pages/user/Registration'
import HomePage from '../pages/user/HomePage'
import Products from '../pages/products/Products'

export default function UserRouters() {
  return (
    <>
    <UserNavbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<UserLoginPage/>}/>
      <Route path='/signup' element={<Registration/>}/>
      <Route path='/products' element={<Products/>} />
    </Routes>
    </>
  )
}
