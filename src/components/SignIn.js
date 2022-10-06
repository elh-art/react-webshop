import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FormInput from './FormInput'
import formInputs from '../assets/formInputs.json'

const SignIn = () => {

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_repeat: "",
  })

  const inputs = formInputs

  const handleSignIn = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <>
      <form className="signin d-flex flex-column" onSubmit={handleSignIn} noValidate>
        <h2 className="card-title mb-4">
          Login
        </h2>
  
        <FormInput key={inputs[2].id} {...inputs[2]} value={values[inputs[2].name]} onChange={onChange} />
        <FormInput key={inputs[3].id} {...inputs[3]} value={values[inputs[3].name]} onChange={onChange} />

        <button type="submit" className="btn btn-lg btn-theme mb-4">
        <span id="spinner" className="d-none spinner-border spinner-border-sm me-3" role="status" aria-hidden="true"></span>
          LOG IN
        </button>
        <div id="response-error" className="form-text text-danger mb-3"></div>
        <div className="remember mb-4 d-flex justify-content-between align-items-center">
          <div className="remember-me">
            <input id="remember-check" type="Checkbox"/>
            <label htmlFor="remember-check">Remember me</label>
          </div>
          <NavLink to="lost-password">Lost your password</NavLink>
        </div>
        <div className="external-login-header">
          <div className="external-login-line"></div>
          <span>Or login with</span>
        </div>
        <div className="external-login mb-4 mt-5 d-flex align-items-center justify-content-between">
          <div className="external-login-facebook">
            <button></button>
          </div>
          <div className="external-login-google">
            <button></button>
          </div>
        </div>
      </form>
    </>
  )
}

export default SignIn