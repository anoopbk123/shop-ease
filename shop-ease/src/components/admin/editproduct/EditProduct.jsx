import React, { useState } from "react";
// import '../../styles/darkTheme.css'
import "../../styles/form.css";
import formValidator from "../../../data/formValidator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function EditProduct() {
  const navigator = useNavigate();
  //product input
  const [productName, setProductName] = useState("");
  const [productPicture, setProductPicture] = useState('')
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  //|| input errors
  const [productNameError, setProductNameError] = useState("true");
  const [productCategoryError, setProductCategoryError] = useState("true");
  const [productDescriptionError, setProductDescriptionError] = useState("true");
  const [productPriceError, setProductPriceError] = useState(true);
  const [productQuantityError, setProductQuantityError] = useState(true);
  //||input validation
  //Product Name
  const handleProductNameInput = (event) => {
    const productNameInput = event.target.value;
    setProductName(productNameInput);
    setProductNameError(formValidator.productName(productNameInput));
  };
  //Product Picture
  const handleProductPictureInput = (event) =>{
    const productPictureInput = event.target.value;
    setProductPicture(productPictureInput);

  }
  //Product Category
  const handleProductCategoryInput = (event) => {
    const productCategoryInput = event.target.value;
    setProductCategory(productCategoryInput);
    setProductCategoryError(formValidator.productCategoryName(productCategoryInput));
  };
  //Product Description
  const handleProductDescriptionInput = (event) => {
    const productDescriptionInput = event.target.value;
    setProductDescription(productDescriptionInput);
    setProductDescriptionError(formValidator.address(productDescriptionInput));
  };
  //product price validation
const handleProductPriceInput = (event) => {
  const productPriceInput = event.target.value;
  setProductPrice(productPriceInput);
  setProductPriceError(formValidator.price(productPriceInput));
};
//product Quantity validation
const handleProductQuantityInput = (event) => {
  const productQuantityInput = event.target.value;
  setProductQuantity(productQuantityInput);
  setProductQuantityError(formValidator.quantity(productQuantityInput));
}
  //form submit
  const submitForm = (formData) => {
    console.log(formData);
    toast.success("product added");
    navigator("/admin/manageproducts");
  };
  //form validation
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("hh");
    if (
      [productName, productCategory, productPicture, productDescription, productPrice, productQuantity, productCategoryError,productNameError, productDescriptionError, productPriceError, productQuantityError].some(
        (value) => value === "" || value === false
      )
    ) {
      toast.error("please fill all fields without errors");
      console.log("hh");
    } else {
      submitForm({
        productName: productName,
        productCategory: productCategory,
        productPicture: productPicture,
        productDescription: productDescription,
        productPrice:productPrice,
      });
    }
  };

  return (
    <div className="container mt-5 p-1" id="edit-product-form">
      <h2 className="mt-3 text-center">Edit Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="container mt-5 form-container justify-content-center">
          {/* Product Picture */}

          <div className="m-3 row justify-content-center">
            <label
              for="inputProductPicture"
              class="form-label col-4 d-sm-block"
            >
              Product Picture:
            </label>
            <div className="col-8">
              <input
                placeholder="Enter Product Name"
                type="file"
                className={`form-control ${
                  productNameError ? "" : "is-invalid"
                }`}
                id="inputProductPicture"
                //   aria-describedby="emailHelp"
                onChange={handleProductPictureInput}
                value={productPicture}
                accept="image/*"
              />
              {/* {!productPictureError && (
                <div className="invalid-feedback">invalid product name</div>
              )} */}
            </div>
          </div>
          {/* Product Name */}
          <div className="m-3 row justify-content-center">
            <label
              for="inputProductName"
              class="form-label col-12 col-sm-4 d-none d-sm-block"
            >
              Product Name
            </label>
            <div className="col-12 col-sm-8">
              <input
                placeholder="Enter Product Name"
                type="text"
                className={`form-control ${
                  productNameError ? "" : "is-invalid"
                }`}
                id="inputProductName"
                //   aria-describedby="emailHelp"
                onChange={handleProductNameInput}
                value={productName}
              />
              {!productNameError && (
                <div className="invalid-feedback">invalid product name</div>
              )}
            </div>
          </div>
          {/* product category */}
          <div className="m-3 row justify-content-center">
            <label
              for="inputProductName"
              class="form-label col-12 col-sm-4 d-none d-sm-block"
            >
              Product Category
            </label>
            <div className="col-12 col-sm-8">
              <input
                placeholder="Enter Product Category"
                type="text"
                className={`form-control ${
                  productCategoryError ? "" : "is-invalid"
                }`}
                id="inputProductCategory"
                //   aria-describedby="emailHelp"
                onChange={handleProductCategoryInput}
                value={productCategory}
              />
              {!productCategoryError && (
                <div className="invalid-feedback">invalid product category</div>
              )}
            </div>
          </div>
            {/* Product Price */}
            <div className="m-3 row justify-content-center">
              <label
                for="inputProductPrice"
                class="form-label col-12 col-sm-4 d-none d-sm-block"
              >
                Product Price
              </label>
              <div className="col-12 col-sm-8">
                <input
                  type="number"
                  className={`form-control ${productPriceError ? "" : "is-invalid"}`}
                  id="inputProductPrice"
                  //   aria-describedby="emailHelp"
                  onChange={handleProductPriceInput}
                  value={productPrice}
                  placeholder="Enter Product Price in INR"
                />
                {!productPriceError && (
                  <div className="invalid-feedback">invalid product Price</div>
                )}
              </div>
            </div>
            {/*product quantity*/}
            <div className="m-3 row justify-content-center">
              <label
                for="inputProductQuantity"
                class="form-label col-12 col-sm-4 d-none d-sm-block"
              >
                Product Quantity
              </label>
              <div className="col-12 col-sm-8">
                <input
                  type="number"
                  className={`form-control ${productQuantityError ? "" : "is-invalid"}`}
                  id="inputProductQuantity"
                  //   aria-describedby="emailHelp"
                  onChange={handleProductQuantityInput}
                  value={productQuantity}
                  placeholder="Enter Product Quantity"
                />
                {!productQuantityError && (
                  <div className="invalid-feedback">invalid product quantity</div>
                )}
              </div>
            </div>
            {/* Product Description */}
          <div className="m-3 row justify-content-center">
              <div class="form-floating text-center">
                <textarea
                  className={`form-control ${productDescriptionError ? "" : "is-invalid"}`}
                  placeholder="Leave a comment here"
                  id="productDescriptionInput"
                  onChange={handleProductDescriptionInput}
                  value={productDescription}
                ></textarea>
                <label for="productDescriptionInput text-center">Product Description</label>
                {!productDescriptionError && (
                  <div className="invalid-feedback">invalid Product Description</div>
                )}
              </div>
            </div>
          {/* submit */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary mb-3">
              Edit Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}