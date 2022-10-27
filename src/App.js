import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { useState, useEffect } from "react"
import "./App.min.css"
import TopMenu from "./components/TopMenu"
import MidMenu from "./components/MidMenu"
import Home from "./view/Home"
import Account from "./view/Account"
import NotFound from "./view/NotFound"
import Footer from "./components/Footer"
import MyAccount from "./components/MyAccount"
import Cart from "./components/Cart"

export const CartContext = React.createContext()
export const PriceContext = React.createContext()

function App() {
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)

  const handlePrice = () => {
    let sumPrice = 0
    cart.map((item) => (sumPrice += item[0].amount * item[0].newPrice))
    setPrice(sumPrice)
  }

  useEffect(() => {
    handlePrice()
  })

  return (
    <>
      <BrowserRouter>
        <PriceContext.Provider value={{ price, setPrice }}>
          <CartContext.Provider value={{ cart, setCart }}>
            <header>
              <TopMenu />
              <MidMenu />
            </header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/account" element={<Account />} />
              <Route path="/myaccount" element={<MyAccount />} />
              <Route path="/shopping-cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </CartContext.Provider>
        </PriceContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
