import React from "react"
import { NavLink } from "react-router-dom"
import { useCountdown } from "../../../assets/useCountdown"
import ExpiredNotice from "./ExpiredNotice"
import ShowCounter from "./ShowCounter"

const FlashSale = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  return (
    <>
      <section className="flash-sale my-5 mx-0">
        <div className="container d-flex justify-content-between align-items-center position-relative p-0">
          <div className="flash-sale_content d-flex flex-column position-absolute top-0 start-0">
            <img
              className="flash-saleImg mt-5 ms-4"
              src={require("../../../images/Flash_sale.png")}
              alt="Picture with text: flash-sale"
            />
            <p className="fs-3 mt-4 ms-5">UP TO 50% OFF</p>
          </div>
          <div className="flash-sale-sidepanel position-absolute text-center end-0">
            {days + hours + minutes + seconds <= 0 ? (
              <ExpiredNotice />
            ) : (
              <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            )}
            <NavLink to="products">
              <button className="btn btn-white">SHOP NOW</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default FlashSale
