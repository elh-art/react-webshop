import React from 'react'
import { NavLink } from 'react-router-dom'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Footer from '../components/Footer'

const Account = () => {
  return (
    <>
      <div className="above-form">
        <div className="container d-flex align-items-center justify-content-between">
          <h3>My Account</h3>
          <h5><NavLink to="/">Home</NavLink><span>/ My Account</span></h5>
        </div>
      </div>
      <section className="container mt-4 mb-5">
        <div className="signup-signin form row">
          <SignIn />
          <SignUp />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Account