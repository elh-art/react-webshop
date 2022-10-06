import React, {useState} from 'react'
import FormInput from './FormInput'
import formInputs from '../assets/formInputs.json'

const SignUp = () => {

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_repeat: "",
  })

  const inputs = formInputs
  inputs[4].pattern = values.password

  const handleSignIn = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <>
      <form className="signup d-flex flex-column" onSubmit={handleSignIn} noValidate>
        <h2 className="card-title mb-4">
          Register
        </h2>
        <div className="card-titel-text mb-4">Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easie</div>

        {inputs.map((input) => (
         <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}

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