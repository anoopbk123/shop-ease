import React, { useEffect, useState } from "react";
import "../../styles/form.css";
import formValidator from "../../../data/formValidator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { userSignup } from "../../../Services/userApi";

export default function UserSignUp() {
  const navigator = useNavigate();
  const [passwordView, setPasswordView] = useState({
    view: "password",
    icon: "bi bi-eye",
  });
  //form errors
  const [userNameError, setUserNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  // const [confirmPasswordError, setConfirmPasswordError] = useState(true);
  const [phoneError, setPhoneError] = useState(true);
  const [addressError, setAddressError] = useState(true);
  //form inputs
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  //toggle password
  const togglePassword = () => {
    if (passwordView.view === "password") {
      setPasswordView({
        view: "text",
        icon: "bi bi-eye-slash",
      });
    } else {
      setPasswordView({
        view: "password",
        icon: "bi bi-eye",
      });
    }
  };
  //user name validation
  const handleUserNameInput = (event) => {
    const userNameInput = event.target.value;
    setUserName(userNameInput);
    setUserNameError(formValidator.userName(userNameInput));
  };
  //email validation
  const handleEmailInput = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    setEmailError(formValidator.email(emailInput));
  };
  //password validation
  //   const handleConfirmPasswordError = () => {
  //     setConfirmPasswordError(confirmPassword !== password && confirmPassword !== '')
  //     // if(confirmPassword === password){
  //     //     setConfirmPasswordError(true)
  //     // }
  //     // else{
  //     //     setConfirmPasswordError(false)
  //     // }

  //   }
  const handlePasswordInput = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    setPasswordError(formValidator.password(passwordInput));
    //handleConfirmPasswordError();
  };
  //confirm password validation
  //   const handleConfirmPasswordInput = (event) => {
  //     const confirmPasswordInput = event.target.value;
  //     setConfirmPassword(confirmPasswordInput);
  //     //handleConfirmPasswordError();
  //   };
  //   useEffect(() => {
  //     handleConfirmPasswordError();
  //   }, [password, confirmPassword]);
  //phone validation
  const handlePhoneInput = (event) => {
    const phoneInput = event.target.value;
    setPhone(phoneInput);
    setPhoneError(formValidator.phoneNumber(phoneInput));
  };
  //address
  const handleAddressInput = (event) => {
    const addressInput = event.target.value;
    setAddress(addressInput);
    setAddressError(formValidator.address(addressInput));
  };
  //form submit
  // const submitForm = async (values) => {
  //   const {data} = await userSignup(values);
  //   if(data.status){
  //     toast.success('signup success');
  //     navigator("/login");
  //   }
  //   else{
  //     toast.error('error')
  //   }
  // }

  const submitForm = async (formData) => {
    // console.log(formData);
    // toast.success("sign up success");
    // navigator("/login");
    try {
      const response = await userSignup(formData);
      const data = await response.data;
      if (data.status) {
        toast.success(data.message);
        navigator("/login");
      }
      else{
        toast.error(data.message)
      }
    } catch (err) {
      toast.error(err.message)
    }
  };

  //error validation
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log("hh");
    if (
      [
        userName,
        userNameError,
        email,
        password,
        phone,
        address,
        emailError,
        passwordError,
        phoneError,
        addressError,
      ].some((value) => value === "" || value === false)
    ) {
      toast.error("please fill all fields without errors");
      // console.log("hh");
    } else {
      submitForm({
        userName,
        email,
        password,
        phone,
        address,
      });
    }
  };
  return (
    <>
      <div className="container p-3">
        <h2 className="mt-5 text-center">Sign UP</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="container mt-5 form-container justify-content-center">
            <div className="m-3 row justify-content-center">
              <label
                for="inputUserName"
                class="form-label col-12 col-sm-4 d-none d-sm-block"
              >
                Name
              </label>
              <div className="col-12 col-sm-8">
                <input
                  placeholder="Enter Name"
                  type="text"
                  className={`form-control ${
                    userNameError ? "" : "is-invalid"
                  }`}
                  id="inputUserName"
                  //   aria-describedby="emailHelp"
                  onChange={handleUserNameInput}
                  value={userName}
                />
                {!userNameError && (
                  <div className="invalid-feedback">invalid user name</div>
                )}
              </div>
            </div>
            <div className="m-3 row justify-content-center">
              <label
                for="inputEmail"
                class="form-label col-12 col-sm-4 d-none d-sm-block"
              >
                Email address
              </label>
              <div className="col-12 col-sm-8">
                <input
                  type="email"
                  className={`form-control ${emailError ? "" : "is-invalid"}`}
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  onChange={handleEmailInput}
                  value={email}
                  placeholder="Enter Email Address"
                />
                {!emailError && (
                  <div className="invalid-feedback">invalid email</div>
                )}
              </div>
            </div>

            <div className="m-3 row justify-content-center">
              <label
                for="exampleInputPassword1"
                className="form-label col-12 col-sm-4  d-none d-sm-block"
              >
                Password
              </label>
              <div className="col-12 col-sm-8 position-relative">
                <input
                  type={passwordView.view}
                  className={`form-control ${
                    passwordError ? "" : "is-invalid"
                  }`}
                  id="exampleInputPassword1"
                  onChange={handlePasswordInput}
                  value={password}
                  placeholder="Enter Password"
                />
                <span
                  className={`position-absolute translate-middle-y eye-icon fs-5 ${
                    passwordError ? "top-50" : "right"
                  }`}
                  onClick={togglePassword}
                >
                  <i className={passwordView.icon}></i>
                </span>
                {!passwordError && (
                  <div className="invalid-feedback">invalid password</div>
                )}
              </div>
            </div>

            {/* <div className="m-3 row justify-content-center">
              <label
                for="confirmPassword"
                className="form-label col-12 col-sm-4 d-none d-sm-block"
              >
                Confirm Password
              </label>
              <div className="col-12 col-sm-8 position-relative">
                <input
                  type={passwordView.view}
                  className={`form-control ${
                    confirmPasswordError ? "" : "is-invalid"
                  }`}
                  id="confirmPassword"
                  onChange={handleConfirmPasswordInput}
                  value={confirmPassword}
                  placeholder="Enter Confirm Password"
                />
                <span
                  className={`position-absolute translate-middle-y eye-icon fs-5 ${
                    confirmPasswordError ? "top-50" : "right"
                  }`}
                  onClick={togglePassword}
                >
                  <i className={passwordView.icon}></i>
                </span>
                {!confirmPasswordError && (
                  <div className="invalid-feedback">password is not matching</div>
                )}
              </div>
            </div> */}
            <div className="m-3 row justify-content-center">
              <label
                for="inputPhone"
                class="form-label col-12 col-sm-4 d-none d-sm-block"
              >
                Phone
              </label>
              <div className="col-12 col-sm-8">
                <input
                  type="number"
                  className={`form-control ${phoneError ? "" : "is-invalid"}`}
                  id="inputPhone"
                  //   aria-describedby="emailHelp"
                  onChange={handlePhoneInput}
                  value={phone}
                  placeholder="Enter Phone number"
                />
                {!phoneError && (
                  <div className="invalid-feedback">invalid phone number</div>
                )}
              </div>
            </div>
            {/* address */}
            <div className="m-3 row justify-content-center">
              <div class="form-floating text-center">
                <textarea
                  className={`form-control ${addressError ? "" : "is-invalid"}`}
                  placeholder="Leave a comment here"
                  id="addressInput"
                  onChange={handleAddressInput}
                  value={address}
                ></textarea>
                <label for="addressInput text-center">Address</label>
                {!addressError && (
                  <div className="invalid-feedback">invalid address</div>
                )}
              </div>
            </div>
            {/* submit */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="text-center">
          if you already have an account <Link to="/login">Login here</Link>{" "}
        </div>
      </div>
    </>
  );
}
