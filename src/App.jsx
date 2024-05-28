import Navbar from "./Components/Navbar/Navbar";
// import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from"./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import mens_banner from './Components/Assets/banner_mens.png';
import womens_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';


function App() {

  return (
    <>
    <BrowserRouter basename="/StyleHive">
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/mens'  element={<ShopCategory banner ={mens_banner}category="men"/>}/>
      <Route path='/womens'  element={<ShopCategory banner={womens_banner} category="women"/>}/>
      <Route path='/kids'  element={<ShopCategory banner={kids_banner}  category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSignUp/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
