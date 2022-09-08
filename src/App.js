import './App.css'
import MidMenu from './components/MidMenu';
import NewArrivals from './components/NewArrivals';
import ShopByCategory from './components/ShopByCategory';
import ShoppingGrid from './components/ShoppingGrid';
import ShowCase from './components/ShowCase';
import TopMenu from './components/TopMenu';
import WebShopInfo from './components/WebShopInfo';

function App() {
  return (
    <>
      <TopMenu />
      <MidMenu />
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
    </>
  );
}

export default App
