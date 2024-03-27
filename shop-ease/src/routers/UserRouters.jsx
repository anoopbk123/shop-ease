import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLoginPage from '../pages/user/UserLoginPage'
import UserNavbar from '../components/user/navbar/UserNavbar'
import Registration from '../pages/user/Registration'
import HomePage from '../pages/user/HomePage'
import Products from '../pages/user/Products'
import ProductDetailsPage from '../pages/user/ProductDetailsPage'
import UserProfile from '../pages/user/UserProfile'
import { useSelector } from 'react-redux'

export default function UserRouters() {
  const isAuthorized = useSelector((state)=>state.isAuthorizedUser)
  return (
    <>
    <UserNavbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<UserLoginPage/>}/>
      <Route path='/signup' element={<Registration/>}/>
      <Route path='/products' element={<Products/>} />
      <Route path='/productdetails' element={<ProductDetailsPage/>}/>
      {
        isAuthorized&&<Route path='/userprofile' element={<UserProfile/>}/>
      }
      {/* Default route */}
      <Route path='*' element={<HomePage/>}/>
    </Routes>
    </>
  )
}
