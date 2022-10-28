import React, { useContext } from "react"
import FlashSale from "../components/FlashSale"
import HotSales from "../components/HotSales"
import NewArrivals from "../components/NewArrivals"
import ShopByCategory from "../components/ShopByCategory"
import ShoppingGrid from "../components/ShoppingGrid"
import ShowCase from "../components/ShowCase"
import SubscribeSection from "../components/SubscribeSection"
import ThirtyOff from "../components/ThirtyOff"
import TopSellers from "../components/TopSellers"
import WebShopInfo from "../components/WebShopInfo"
import local_json from "../assets/products.json"
import { CartContext, WishContext } from "../App"

const Home = () => {
  const { cart, setCart } = useContext(CartContext)
  const { wishList, setWishList } = useContext(WishContext)

  //CountDown calculations:
  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()
  const dateTimeAfterThreeDays = NOW_IN_MS + SEVEN_DAYS_IN_MS

  //Filling Cart functionality
  const handleClickOnCart = (item) => {
    const selectedCardId = parseInt(item.target.parentNode.parentNode.id)
    const selectedCardObj = local_json.filter(
      (obj) => obj.id === selectedCardId
    )
    //Product can be placed into cart only once:
    const selectedCardAgain = cart.some((item) => item[0].id === selectedCardId)
    if (selectedCardAgain === false) setCart([...cart, selectedCardObj])
  }

  const handleClickOnWish = (item) => {
    const selectedCardId = parseInt(item.target.parentNode.parentNode.id)
    const selectedCardObj = local_json.filter(
      (obj) => obj.id === selectedCardId
    )
    const selectedCardAgain = wishList.some(
      (item) => item[0].id === selectedCardId
    )
    if (selectedCardAgain === false) setWishList([...wishList, selectedCardObj])
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
