import React, { useState } from "react";
import "../../styles/form.css";
import formValidator from "../../../data/formValidator";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../../Services/userApi";

export default function UserLogin() {
  const navigator = useNavigate()
  const [passwordView, setPasswordView] = useState({
    view: "password",
    icon: "bi bi-eye",
  });
  //form errors
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  //form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')
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
  //email validation
  const handleEmailInput = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    setEmailError(formValidator.email(emailInput));
  };
  //password validation
  const handlePasswordInput = (event) => {
    const passwordInput = event.target.value
    setPassword(passwordInput)
    setPasswordError(formValidator.password(passwordInput));
  }
  //form submit
  const submitForm = async (formData) => {

    try{
      const response = await userLogin(formData)
      const data = await response.data
      if(data.status){
        toast.success(data.message)
        navigator('/')
      }
      else{
        toast.error(data.message)
      }

    }
    catch(err){
      toast.error(err.message)
    }


    // console.log(formData)
    // toast.success('login success')
    // navigator('/')
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('hh')
    if([email, password, emailError, passwordError].some(value => value === "" || value === false)){
        toast.error('please fill all fields without errors')
        console.log('hh')
    }
    else{
      submitForm({
        email,
        password,
      })
    }
  }
  return (
    <>
      <div className="container p-3">
        <h2 className="mt-5 text-center">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="container mt-5 form-container justify-content-center">
            <div className="m-3 row justify-content-center">
              <label for="inputEmail" class="form-label col-12 col-sm-4">
                Email address
              </label>
              <div className="col-12 col-sm-8">
                <input
                  type="email"
                  className={`form-control ${emailError ? '' : 'is-invalid'}`}
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  onChange={handleEmailInput}
                  value={email}
                />
                {!emailError && (
                  <div className="invalid-feedback">invalid email</div>
                )}
              </div>
            </div>

            <div className="m-3 row justify-content-center">
              <label
                for="exampleInputPassword1"
                className="form-label col-12 col-sm-4"
              >
                Password
              </label>
              <div className="col-12 col-sm-8 position-relative">
                <input
                  type={passwordView.view}
                  className={`form-control ${passwordError ? '' : 'is-invalid'}`}
                  id="exampleInputPassword1"
                  onChange={handlePasswordInput}
                  value={password}
                />
                <span
                  className={`position-absolute translate-middle-y eye-icon fs-5 ${passwordError ? 'top-50' : 'right'}`}
                  onClick={togglePassword}
                >
                  <i className={passwordView.icon}></i>
                </span>
                {!passwordError && (
                  <div className="invalid-feedback">invalid password</div>
                )}
              </div>
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="text-center">if you don't have an account <Link to='/signup'>sign up here</Link> </div>
      </div>
    </>
  );
}
