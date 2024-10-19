// import React from 'react';
// import './App.css';
// import { Home } from './pages/home';
// import { ProductPage } from './pages/Productspage';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { SingleProduct } from './pages/SingleProduct';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/productlist' element={<ProductPage />} />
//         <Route path='/singleproduct' element={<SingleProduct />} />
//       </Routes>
//     </BrowserRouter >
//   );
// }

// export default App;


// src/App.tsx
import React from 'react';
import './App.css';
import { Home } from './pages/home';
import { ProductPage } from './pages/Productspage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SingleProduct } from './pages/SingleProduct';
import { ProductProvider } from './components/BidContext';

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productlist' element={<ProductPage />} />
          <Route path='/singleproduct' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;

