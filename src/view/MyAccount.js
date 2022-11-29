import React from "react"
import { useNavigate } from "react-router-dom"

const MyAccount = () => {
  const navigate = useNavigate()

  const handleSignOut = (e) => {
    sessionStorage.removeItem("token")
    navigate("/account")
  }

  return (
    <>
      <div className="container m-5 d-flex align-items-center justify-content-around">
        <button onClick={handleSignOut} className="btn btn-primary">
          Logout!
        </button>
      </div>
    </>
  )
}

export default MyAccount
