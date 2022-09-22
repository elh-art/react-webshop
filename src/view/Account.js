import React from 'react'
import '../css/Account.css'
import { NavLink } from 'react-router-dom'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Account = () => {
  return (
    <>
      <div class="above-form">
        <div class="container d-flex align-items-center justify-content-between">
          <h3>My Account</h3>
          <h5><NavLink to="/">Home</NavLink><span>/ My Account</span></h5>
        </div>
      </div>
      <section class="signup-signin form container d-flex justify-content-between gap-4 mt-5 mb-5">
        <SignIn />
        <SignUp />
      </section>
    </>
  )
}

export default Account