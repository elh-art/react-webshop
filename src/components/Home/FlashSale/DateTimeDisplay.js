import React from "react"

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={"time-ball"}>
      <h3 className={isDanger ? "text-danger" : ""}>{value}</h3>
      <p className={isDanger ? "text-danger" : ""}>{type}</p>
    </div>
  )
}

export default DateTimeDisplay
