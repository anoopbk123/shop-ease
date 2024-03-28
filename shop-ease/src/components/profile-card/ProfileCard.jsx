import React, { useState } from "react";
import formValidator from "../../data/formValidator";
import { toast } from "react-toastify";
import { userProfileEdit } from "../../Services/userApi";

export default function ProfileCard({ userDetails, updateData }) {
  const [editData, setEditData] = useState({
    address:''
  })
  const handleEditClick = (userDetails)=>{
    setEditData((previousData)=>{
      return{
        ...previousData,
        address:userDetails.address
      }
    })
  }

  const handleEditFormChange = e => {
    const {name, value} = e.target
    setEditData((previousData)=>{
      return {
        ...previousData,
        [name]:value
      }
    })
  }

  const handleEditFormSubmit=async (e)=>{
    e.preventDefault()
    if(!formValidator.address(editData.address)){
      toast.error('invalid address');
      return
    }
    try{
      const res = await userProfileEdit(editData)
    console.log('res',res)

      if(res.data.status){
        toast.success(res.data.message)
        updateData()
      }
      else{
        toast.error(res.data.message)
      }
    }
    catch(err){
      toast.error(err.message)
    }
  }

  return (
    <>
      {userDetails ? (
        <>
          <div className="container m-1 border border-black rounded p-2">
            <div className="row">
              {/*|| user_id */}
              <div className="col-12">user_id: {userDetails._id}</div>
              <div className="col-12">Name: {userDetails.name}</div>
              <div className="col-12">Email: {userDetails.email}</div>
              <div className="col-12">Phone: {userDetails.phone}</div>
              <div className="col-12">Address: {userDetails.address}</div>
            </div>
            <div>
              <button onClick={()=>{handleEditClick(userDetails)}} className="btn btn-warning my-2 " data-bs-toggle="modal" data-bs-target="#edit-address-modal">Edit Address</button>
            </div>
          </div>
          {/* edit address */}

          <div className="edit-address-container">
            <div class="modal fade" tabindex="-1" id="edit-address-modal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Change Address</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                  <form onSubmit={handleEditFormSubmit} action="" id="edit-address-form">
                  <input onChange={handleEditFormChange} name="address" value={editData.address} placeholder="enter address" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" form="edit-address-form" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Loading data</>
      )}
    </>
  );
}
