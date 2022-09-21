import React from 'react'
import FlashSale from '../components/FlashSale';
import Footer from '../components/Footer';
import HotSales from '../components/HotSales';
import MiniCarousel from '../components/MiniCarousel';
import NewArrivals from '../components/NewArrivals';
import ShopByCategory from '../components/ShopByCategory';
import ShoppingGrid from '../components/ShoppingGrid';
import ShowCase from '../components/ShowCase';
import SubscribeSection from '../components/SubscribeSection';
import ThirtyOff from '../components/ThirtyOff';
import TopSellers from '../components/TopSellers';
import WebShopInfo from '../components/WebShopInfo';

const Home = () => {
  return (
    <>
      <ShowCase />
      <WebShopInfo />
      <ShopByCategory 
        header1="SHOP BY" 
        header2="CATEGORY" 
        fillertext="We always try to give you the best product within a fast and reliable way"/>
      <ShoppingGrid />
      <ShopByCategory 
        header1="NEW" 
        header2="ARRIVALS" 
        fillertext="Check out our latest products from top fashion designers"/>
      <NewArrivals />
      <MiniCarousel />
      <ThirtyOff />
      <ShopByCategory 
        header1="FEATURED" 
        header2="PRODUCTS" 
        fillertext="Check out our monthly featured products from top brands"/>
      <HotSales />
      <MiniCarousel />
      <FlashSale />
      <ShopByCategory 
        header1="TOP" 
        header2="SELLERS" 
        fillertext="Check out our weekly top sellers in all category"/>
      <TopSellers />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default Home