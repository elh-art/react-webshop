import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.min.css"
import TopMenu from "./components/TopMenu"
import MidMenu from "./components/MidMenu"
import Home from "./view/Home"
import Account from "./view/Account"
import NotFound from "./view/NotFound"
import Footer from "./components/Footer"
import MyAccount from "./components/MyAccount"

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <TopMenu />
          <MidMenu />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
