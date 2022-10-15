import React, {useState} from 'react'
import FormInput from './FormInput'
import formInputs from '../assets/formInputs.json'
import axios from 'axios'

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

  // HELPER FUNCTIONS
  const isHidden = (e) => {
    const style = window.getComputedStyle(e);
    return (style.display === 'none')
  }

  const clearErrorMsg = (text) => {
    setTimeout(() => {
      document.getElementById(`response-${text}`).innerText = ''
    }, "3000")
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    e.target[5].children[0].classList.remove('d-none')
    
    const validatedElements = document.querySelector('.signup').getElementsByClassName("validated")
    const validatedArray = []

  // COUNT NUMBER OF VALIDATED INPUTS
    for (let valid of validatedElements) {
      if (!isHidden(valid)) validatedArray.push(valid)
    }

  // SEND INPUT DATA TO SERVER
    if (validatedArray.length === 5) {

      let json = JSON.stringify({
        firstname: e.target[0].value,
        lastname: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value
      })
    
      const request = axios.post('https://lexicon-shared-webapi.azurewebsites.net/api/Auth/SignUp', json, {headers: {
        "Content-Type": "application/json"}
      })
      .then(res => {
        if (res.status === 200) {
          document.getElementById('response-success').innerText = 'SUCCESS! Now you can Login.'
          e.target[5].children[0].classList.add('d-none')
          clearErrorMsg('success')
        }
      })
      .catch((error)=> {
        switch(error.response.status) {
          case 409:
            document.getElementById('response-error2').innerText = 'There is already a user with the same email address'
            e.target[5].children[0].classList.add('d-none')
            clearErrorMsg('error2')
            break;
          case 408:
            document.getElementById('response-error2').innerText = 'Server timeout, please try later'
            e.target[5].children[0].classList.add('d-none')
            clearErrorMsg('error2')
            break;
          case 404:
            document.getElementById('response-error2').innerText = 'The server is not available right now, please try later'
            e.target[5].children[0].classList.add('d-none')
            clearErrorMsg('error2')
            break;
          case 400:
            document.getElementById('response-error2').innerText = 'Failure in request'
            e.target[5].children[0].classList.add('d-none')
            clearErrorMsg('error2')
            break;
          default:
            console.log(error.response.data)
        }
      })
    } else {
      document.getElementById('response-error2').innerText = 'Not all validation tests passed, please correct your values'
      e.target[5].children[0].classList.add('d-none')
      clearErrorMsg('error2')
    }
  }

  const onChange = (e) => {
    setUpValues({...upValues, [e.target.name]: e.target.value})
  }

  return (
    <div className="col-sm-6">
      <div className="card border-0">

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