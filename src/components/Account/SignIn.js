import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import formInputs from "../../assets/formInputs.json"
import { isHidden, clearErrorMsg } from "../../assets/HelperFunctions"
import axios from "axios"
import FormInput from "./FormInput"

const SignIn = () => {
  const navigate = useNavigate()

  const [inValues, setInValues] = useState({
    email: "",
    password: "",
  })

  const inputs = formInputs

  const handleSignIn = (e) => {
    e.preventDefault()

    const spinnerIcon = e.target[2].children[0]

    spinnerIcon.classList.remove("d-none")

    const validatedElements = document
      .querySelector(".signin")
      .getElementsByClassName("validated")
    const validatedArray = []

    // COUNT NUMBER OF VALIDATED INPUTS
    for (let valid of validatedElements) {
      if (!isHidden(valid)) validatedArray.push(valid)
    }

    // SEND INPUT DATA TO SERVER
    if (validatedArray.length === 2) {
      let json = JSON.stringify(inValues)

      const request = axios
        .post(
          "https://lexicon-shared-webapi.azurewebsites.net/api/Auth/SignIn",
          json,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem("token", res.data)
            navigate("/myaccount")
            console.log("SUCCESS! Now you are inlogged.")
          }
        })
        .catch((error) => {
          switch (error.response.status) {
            case 408:
              document.getElementById("response-error").innerText =
                "Server timeout, please try later"
              spinnerIcon.classList.add("d-none")
              clearErrorMsg("error")
              break
            case 404:
              document.getElementById("response-error").innerText =
                "The server is not available right now, please try later"
              spinnerIcon.classList.add("d-none")
              clearErrorMsg("error")
              break
            case 400:
              document.getElementById("response-error").innerText =
                "Email address and password combination not exist"
              spinnerIcon.classList.add("d-none")
              clearErrorMsg("error")
              break
            default:
              console.log(error.response.data)
          }
        })
    } else {
      document.getElementById("response-error").innerText =
        "Not all validation tests passed, please correct your values"
      spinnerIcon.classList.add("d-none")
      clearErrorMsg("error")
    }
  }

  const onChange = (e) => {
    setInValues({ ...inValues, [e.target.name]: e.target.value })
  }

  return (
    <div className="col-sm-6">
      <div className="card border-0">
        <form
          className="signin card-body w-100"
          onSubmit={handleSignIn}
          noValidate
        >
          <h2 className="card-title mb-4">Login</h2>

          <FormInput
            key={inputs[2].id}
            {...inputs[2]}
            value={inValues[inputs[2].name]}
            onChange={onChange}
          />
          <FormInput
            key={inputs[3].id}
            {...inputs[3]}
            value={inValues[inputs[3].name]}
            onChange={onChange}
          />

          <button type="submit" className="btn btn-lg btn-theme mb-4 w-100">
            <span
              id="spinner"
              className="d-none spinner-border spinner-border-sm me-3"
              role="status"
              aria-hidden="true"
            ></span>
            LOG IN
          </button>
          <div id="response-error" className="form-text text-danger mb-3"></div>
          <div className="remember mb-4 d-flex justify-content-between align-items-center">
            <div className="remember-me">
              <input id="remember-check" type="Checkbox" />
              <label htmlFor="remember-check">Remember me</label>
            </div>
            <NavLink to="lost-password">Lost your password</NavLink>
          </div>
          <div className="external-login-header">
            <div className="external-login-line"></div>
            <span>Or login with</span>
          </div>
          <div className="external-login mb-4 mt-5 d-flex align-items-center justify-content-between gap-2">
            <a href="https://www.facebook.com" target="_blank">
              <div className="external-login-facebook">
                <i className="fa-brands fa-square-facebook p-2"> Facebook</i>
              </div>
            </a>
            <a href="https://www.google.com" target="_blank">
              <div className="external-login-google">
                <i className="fa-brands fa-google p-2"> Google</i>
              </div>
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
