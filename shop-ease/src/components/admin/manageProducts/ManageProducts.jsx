import React from "react";
import "./ManageProducts.css";
import features from '../../../data/features'
import { useNavigate } from "react-router-dom";

export default function ManageProducts() {
  const navigate = useNavigate()
  return (
    <div className="container mt-5 pt-3">
      <h2 className="h2">Manage products</h2>
      <div className="table-responsive">
      <table class="table mt-2 table-striped text-center">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col"  className='text-center'>Manage</th>
    </tr>
  </thead>
  <tbody>
    {features.map(value => (
        <tr>
        <th scope="row">1</th>
        <td><img className="pd-img img-fluid" src={value.img} alt="" /></td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>23</td>
        <td><button onClick={ () => navigate('/admin/editproduct')} className="btn btn-warning m-1">edit</button><button className="btn btn-danger m-1">delete</button></td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
}
