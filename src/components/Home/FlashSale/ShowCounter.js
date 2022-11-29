import React from "react"
import DateTimeDisplay from "./DateTimeDisplay"

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="time-balls mb-4 d-flex justify-content-between align-items-center text-center">
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  )
}

export default ShowCounter
