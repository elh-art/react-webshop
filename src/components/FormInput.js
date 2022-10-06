import React, { useState } from 'react'

const FormInput = (props) => {
  const [focused, setFocused] = useState(false)
  const {name, type, label, errorMessage, onChange, ...inputProps} = props

  const handleFocus = (e) => {
    setFocused(true)
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
      />
      <i className="fas fa-check-circle"></i>
      <small className="text-danger" id={`${name}` + "-error"}>{errorMessage}</small>
    </div>

    )
}

export default FormInput