 
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.min.css'
import TopMenu from './components/TopMenu';
import MidMenu from './components/MidMenu';
import Home from './view/Home'
import Account from './view/Account'
import NotFound from './view/NotFound';

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
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
