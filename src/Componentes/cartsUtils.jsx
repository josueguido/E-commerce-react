// cartUtils.js

import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productDetails) => {
    setCart([...cart, productDetails]);
  };

  return { cart, addToCart };
};

export default useCart;
