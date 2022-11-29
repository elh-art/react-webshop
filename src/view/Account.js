import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import SignIn from "../components/Account/SignIn"
import SignUp from "../components/Account/SignUp"

const Account = () => {
  const [token, setToken] = useState()
  const navigate = useNavigate()

  const isSignedIn = () => {
    setToken(sessionStorage.getItem("token"))
    if (token) navigate("/myaccount")
  }

  return (
    <>
      <div className="above-form">
        <div className="container d-flex align-items-center justify-content-between">
          <h3>My Account</h3>
          <h5>
            <NavLink to="/">Home</NavLink>
            <span>/ My Account</span>
          </h5>
        </div>
      </div>
      <section className="container mt-4 mb-5">
        <div onMouseOver={isSignedIn} className="signup-signin form row">
          <SignIn />
          <SignUp />
        </div>
      </section>
    </>
  )
}

export default Account
