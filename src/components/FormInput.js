import React, { useState } from 'react'

const FormInput = (props) => {
  const [focused, setFocused] = useState(false)
  const {name, type, label, errorMessage, onChange, ...inputProps} = props

  const handleFocus = () => {
    setFocused(true)
  }

  const showPassword = (e) => {
    e.target.offsetParent.children[1].type === "password" ? e.target.offsetParent.children[1].type = "text" : e.target.offsetParent.children[1].type = "password"
  }

  return (
  
    <div className="form-input name-input mb-4">
      <label htmlFor={name}>{label}<span className="required">*</span></label>
      <input 
        type={type} 
        name={name} 
        id={name} 
        onChange={onChange} 
        onBlur={handleFocus}
        onFocus={() => props.name === "password_repeat" && setFocused(true)}
        focused={focused.toString()}
        autoComplete="off" 
        {...inputProps}
        className="mb-2"
      />
      <i className="fas fa-check-circle validated"></i>
      {props.name === "password" && <i className="fas fa-eye" onClick={showPassword}></i>}
      {props.name === "password_repeat" && <i className="fas fa-eye" onClick={showPassword}></i>}
      <small className="text-danger" id={`${name}` + "-error"}>{errorMessage}</small>
    </div>

    )
}

export default FormInput