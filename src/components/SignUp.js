import React from 'react'

const SignUp = () => {
  return (
    <>
      <form className="signup d-flex flex-column" onSubmit="handleSignUp(event)" noValidate>
        <h2 className="card-title mb-4">
          Register
        </h2>
        <div className="card-titel-text mb-4">Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easie</div>
        <div className="input-control name-input mb-4">
          <label htmlFor="firstname">Firstname <span className="required">*</span></label>
          <input type="text" name="firstname" id="firstname" autoComplete="off" onKeyUp="validate(event)" required/>
          <i className="fas fa-check-circle"></i>
          <small className="text-danger" id="firstname-error"></small>
        </div>
        <div className="input-control name-input mb-4">
          <label htmlFor="lastname">Lastname <span className="required">*</span></label>
          <input type="text" name="lastname" id="lastname" autoComplete="off" onKeyUp="validate(event)" required/>
          <i className="fas fa-check-circle"></i>
          <small className="text-danger" id="lastname-error"></small>
        </div>
        <div className="input-control email-input mb-4">
          <label htmlFor="email">Email address <span className="required">*</span></label>
          <input type="email" name="email" id="email2" autoComplete="off" onKeyUp="validate(event)" required/>
          <i className="fas fa-check-circle"></i>
          <small className="text-danger" id="email2-error"></small>
        </div>
        <div className="input-control password-input mb-4">
          <label htmlFor="password">Password <span className="required">*</span></label>
          <input type="password" name="password" id="password2" autoComplete="off" onKeyUp="validate(event)" required/>
          <i className="fas fa-check-circle"></i>
          <small className="text-danger" id="password2-error"></small>
        </div>
        <div className="input-control password-input mb-4">
          <label htmlFor="password-repeat">Password check <span className="required">*</span></label>
          <input type="password" name="password-repeat" id="password-repeat" autoComplete="off" onKeyUp="validate(event)" required/>
          <i className="fas fa-check-circle"></i>
          <small className="text-danger" id="password-repeat-error"></small>
        </div>
        <div className="privacy-policy mb-4">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#"> privacy policy.</a>
        </div>
        <button type="submit" className="btn btn-lg btn-theme mb-4">
          <span id="spinner" className="d-none spinner-border spinner-border-sm me-3" role="status" aria-hidden="true"></span>
          REGISTER
        </button>
        <div id="response-error2" className="form-text text-danger"></div>
        <div id="response-success" className="form-text text-success"></div>
      </form>
    </>
  )
}

export default SignUp