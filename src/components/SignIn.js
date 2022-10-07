import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FormInput from './FormInput'
import formInputs from '../assets/formInputs.json'

const SignIn = () => {

  const [inValues, setInValues] = useState({
    email: "",
    password: "",
  })

  const inputs = formInputs

  const handleSignIn = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setInValues({...inValues, [e.target.name]: e.target.value})
  }

  return (
    <div class="col-sm-6">
      <div class="card border-0">

      <form className="signin card-body w-100" onSubmit={handleSignIn} noValidate>
        <h2 className="card-title mb-4">
          Login
        </h2>
  
        <FormInput key={inputs[2].id} {...inputs[2]} value={inValues[inputs[2].name]} onChange={onChange} />
        <FormInput key={inputs[3].id} {...inputs[3]} value={inValues[inputs[3].name]} onChange={onChange} />

        <button type="submit" className="btn btn-lg btn-theme mb-4 w-100">
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
        <div className="external-login mb-4 mt-5 d-flex align-items-center justify-content-between gap-2">
          <a href='https://www.facebook.com' target='_blank'>
            <div className="external-login-facebook">
             <i class="fa-brands fa-square-facebook p-2"> Facebook</i>
            </div>
          </a>
          <a href='https://www.google.com' target='_blank'>
            <div className="external-login-google">
              <i class="fa-brands fa-google p-2"> Google</i>
            </div>
          </a>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignIn