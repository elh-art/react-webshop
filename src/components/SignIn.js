import React from 'react'
import { NavLink } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
      <form className="signin d-flex flex-column" onsubmit="handleSignIn(event)" novalidate>
        <h2 className="card-title mb-4">
          Login
        </h2>
        <div className="input-control email-input mb-4">
          <label for="email">Email address <span className="required">*</span></label>
          <input type="email" name="email" id="email" autocomplete="off" onkeyup="validate(event)" required/>
          <i className="fas fa-check-circle"></i>
          <small className="text-danger" id="email-error"></small>
        </div>
        <div className="input-control password-input mb-4">
          <label for="password">Password <span className="required">*</span></label>
          <input type="password" name="password" id="password" autocomplete="off" onkeyup="validate(event)" required/>
          <i className="fas fa-check-circle"></i>
          <small className="text-danger" id="password-error"></small>
        </div>
        <button type="submit" className="btn btn-lg btn-theme mb-4">
        <span id="spinner" className="d-none spinner-border spinner-border-sm me-3" role="status" aria-hidden="true"></span>
          LOG IN
        </button>
        <div id="response-error" className="form-text text-danger mb-3"></div>
        <div className="remember mb-4 d-flex justify-content-between align-items-center">
          <div className="remember-me">
            <input id="remember-check" type="Checkbox"/>
            <label for="remember-check">Remember me</label>
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