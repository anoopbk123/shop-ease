import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLoginPage from '../pages/admin/AdminLoginPage'
import CreateProductPage from '../pages/admin/CreateProductPage'
import UserList from '../pages/admin/UserList'
import ManageProductsPage from '../pages/admin/ManageProductsPage'
import EditProductPage from '../pages/admin/EditProductPage'

export default function AdminRouters() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AdminLoginPage/>} />
        <Route path='/createproduct' element={<CreateProductPage/>} />
        <Route path='/userlist' element={<UserList/>}/>
        <Route path='/manageproducts' element={<ManageProductsPage/>}/>
        <Route path='/editproduct' element={<EditProductPage/>}/>
      </Routes>
    </>
  )
}

{/* <Routes>
<Route path='/login' element={<AdminLoginPage/>} />
  {
  isAuthorizedAdmin?<>
        <Route path='/' element={<ManageProductsPage/>} />
        <Route path='/createproduct' element={<CreateProductPage/>} />
        <Route path='/userlist' element={<UserList/>}/>
        <Route path='/editproduct' element={<EditProductPage/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
  </>
  :
  <>
  <Route path='/*' element={<Navigate to='/login'/>}/>
  </>
  }
        
</Routes> */}