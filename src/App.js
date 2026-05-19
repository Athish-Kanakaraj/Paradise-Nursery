import React, { useState } from 'react';

import './App.css';

import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {

  const [showProducts, setShowProducts] = useState(false);

  const [showCart, setShowCart] = useState(false);

  return (

    <div>

      {!showProducts ? (

        <AboutUs
          setShowProducts={setShowProducts}
        />

      ) : showCart ? (

        <CartItem
          setShowCart={setShowCart}
        />

      ) : (

        <ProductList
          setShowCart={setShowCart}
        />

      )}

    </div>

  );
}

export default App;