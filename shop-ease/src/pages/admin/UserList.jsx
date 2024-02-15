import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import fakeUserData from "../../data/fakeUserData"

export default function UserList() {
  return (
    <>
    <AdminNavbar/>
    <div className='container mt-3 pt-5 mx-auto'>
    <h2 className="text-left h2 mx-3">User List</h2>
    <div className="container">
        {
            fakeUserData.map(value => (
              <div className='container m-1 border border-black rounded p-2'>
              <div className="row">
              {/*|| user_id */}
                <div className="col-12">
                  user_id: {value.id}
                </div>
                <div className="col-12">
                  Name: {value.name}
                </div>
                <div className="col-12">Email: {value.email}</div>
                <div className="col-12">Password: {value.password}</div>
                <div className="col-12">Phone: {value.phone}</div>
                <div className="col-12">Address: {value.address}</div>
              </div>
              <div>
                <button className="btn btn-danger">remove</button>
              </div>
          </div>
            ))
        }
    </div>
    </div>
    </>
  )
}
