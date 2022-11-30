import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { handlePrice } from "./assets/HelperFunctions"
import "./App.min.css"
import TopMenu from "./components/Header/TopMenu"
import MidMenu from "./components/Header/MidMenu"
import Home from "./view/Home"
import Account from "./view/Account"
import NotFound from "./view/NotFound"
import Footer from "./view/Footer"
import MyAccount from "./view/MyAccount"
import Cart from "./view/Cart"
import Products from "./view/Products"

export const CartContext = React.createContext()
export const PriceContext = React.createContext()
export const WishContext = React.createContext()

function App() {
  const [cart, setCart] = useState([])
  const [wishList, setWishList] = useState([])
  const [price, setPrice] = useState(0)

  useEffect(() => {
    handlePrice(cart, setPrice)
  })

  return (
    <>
      <BrowserRouter>
        <WishContext.Provider value={{ wishList, setWishList }}>
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
                <Route path="/products/:id" element={<Products />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </CartContext.Provider>
          </PriceContext.Provider>
        </WishContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
