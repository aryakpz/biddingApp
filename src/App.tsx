import React from 'react';
import './App.css';
import { Home } from './pages/home';
import { Product_Page } from './pages/Products_page';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SingleProduct } from './pages/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productlist' element={<Product_Page />} />
        <Route path='/home' element={<Home />} />
        <Route path='/singleproduct' element={<SingleProduct />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;


