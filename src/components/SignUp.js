import React, {useState} from 'react'
import FormInput from './FormInput'
import formInputs from '../assets/formInputs.json'

const SignUp = () => {

  const [upValues, setUpValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_repeat: "",
  })

  const inputs = formInputs
  inputs[4].pattern = upValues.password

  const handleSignUp = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setUpValues({...upValues, [e.target.name]: e.target.value})
  }

  return (
    <div class="col-sm-6">
      <div class="card border-0">

      <form className="signup card-body w-100" onSubmit={handleSignUp} noValidate>
        <h2 className="card-title mb-4">
          Register
        </h2>
        <div className="card-titel-text mb-4">Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easie</div>

        {inputs.map((input) => (
         <FormInput key={input.id} {...input} value={upValues[input.name]} onChange={onChange} />
        ))}

        <div className="privacy-policy mb-4">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#"> privacy policy.</a>
        </div>
        <button type="submit" className="btn btn-lg btn-theme mb-4 w-100">
          <span id="spinner" className="d-none spinner-border spinner-border-sm me-3" role="status" aria-hidden="true"></span>
          REGISTER
        </button>
        <div id="response-error2" className="form-text text-danger"></div>
        <div id="response-success" className="form-text text-success"></div>
      </form>
    </div>
  </div>
  )
}

export default SignUp