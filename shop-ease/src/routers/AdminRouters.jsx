import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLoginPage from '../pages/admin/AdminLoginPage'
import CreateProductPage from '../pages/admin/CreateProductPage'

export default function AdminRouters() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AdminLoginPage/>} />
        <Route path='/createproduct' element={<CreateProductPage/>} />
      </Routes>
    </>
  )
}
