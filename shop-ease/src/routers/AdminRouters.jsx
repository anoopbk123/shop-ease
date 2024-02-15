import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLoginPage from '../pages/admin/AdminLoginPage'
import CreateProductPage from '../pages/admin/CreateProductPage'
import UserList from '../pages/admin/UserList'
import ManageProductsPage from '../pages/admin/ManageProductsPage'

export default function AdminRouters() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AdminLoginPage/>} />
        <Route path='/createproduct' element={<CreateProductPage/>} />
        <Route path='/userlist' element={<UserList/>}/>
        <Route path='/manageproducts' element={<ManageProductsPage/>}/>
      </Routes>
    </>
  )
}
