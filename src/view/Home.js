import React, { useContext } from "react"
import { CartContext, WishContext } from "../App"
import { handleClickOnX } from "../assets/HelperFunctions"
import FlashSale from "../components/Home/FlashSale/FlashSale"
import HotSales from "../components/Home/HotSales"
import NewArrivals from "../components/Home/NewArrivals"
import ShopByCategory from "../components/Home/ShopByCategory"
import ShoppingGrid from "../components/Home/ShoppingGrid"
import ShowCase from "../components/Home/ShowCase"
import SubscribeSection from "../components/Home/SubscribeSection"
import ThirtyOff from "../components/Home/ThirtyOff"
import TopSellers from "../components/Home/TopSellers"
import WebShopInfo from "../components/Home/WebShopInfo/WebShopInfo"

const Home = () => {
  const { cart, setCart } = useContext(CartContext)
  const { wishList, setWishList } = useContext(WishContext)

  //CountDown calculations:
  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()
  const dateTimeAfterThreeDays = NOW_IN_MS + SEVEN_DAYS_IN_MS

  //Filling Cart functionality
  const handleClickOnCart = (item) => {
    handleClickOnX(item, cart, setCart)
  }

  const handleClickOnWish = (item) => {
    handleClickOnX(item, wishList, setWishList)
  }

  return (
    <>
      <ShowCase />
      <WebShopInfo />
      <ShopByCategory
        header1="SHOP BY"
        header2="CATEGORY"
        fillertext="We always try to give you the best product within a fast and reliable way"
      />
      <ShoppingGrid />
      <ShopByCategory
        header1="NEW"
        header2="ARRIVALS"
        fillertext="Check out our latest products from top fashion designers"
      />
      <NewArrivals
        handleClickOnCart={handleClickOnCart}
        handleClickOnWish={handleClickOnWish}
      />
      <ThirtyOff />
      <ShopByCategory
        header1="FEATURED"
        header2="PRODUCTS"
        fillertext="Check out our monthly featured products from top brands"
      />
      <HotSales
        handleClickOnCart={handleClickOnCart}
        handleClickOnWish={handleClickOnWish}
      />
      <FlashSale targetDate={dateTimeAfterThreeDays} />
      <ShopByCategory
        header1="TOP"
        header2="SELLERS"
        fillertext="Check out our weekly top sellers in all category"
      />
      <TopSellers
        handleClickOnCart={handleClickOnCart}
        handleClickOnWish={handleClickOnWish}
      />
      <SubscribeSection />
    </>
  )
}

export default Home
