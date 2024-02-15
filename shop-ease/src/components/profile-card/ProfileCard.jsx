import React from 'react'

export default function ProfileCard({userDetails}) {
  return (
    <div className='container m-1 border border-black rounded p-2'>
        <div className="row">
        {/*|| user_id */}
          <div className="col-12">
            user_id: {userDetails.id}
          </div>
          <div className="col-12">
            Name: {userDetails.name}
          </div>
          <div className="col-12">Email: {userDetails.email}</div>
          <div className="col-12">Password: {userDetails.password}</div>
          <div className="col-12">Phone: {userDetails.phone}</div>
          <div className="col-12">Address: {userDetails.address}</div>
        </div>
        <div>
          <button className="btn btn-danger">Edit</button>
        </div>
    </div>
  )
}
