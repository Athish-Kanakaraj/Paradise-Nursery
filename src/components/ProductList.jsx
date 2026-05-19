import React from 'react';
import Navbar from './Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

function ProductList({ setShowCart }) {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const plants = [
    {
      id: 1,
      name: 'Snake Plant',
      price: 15,
      category: 'Air Purifying Plants',
      image:
        'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg',
    },

    {
      id: 2,
      name: 'Spider Plant',
      price: 12,
      category: 'Air Purifying Plants',
      image:
        'https://images.unsplash.com/photo-1614594975525-e45190c55d0b',
    },

    {
      id: 3,
      name: 'Peace Lily',
      price: 18,
      category: 'Air Purifying Plants',
      image:
        'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
    },

    {
      id: 4,
      name: 'Aloe Vera',
      price: 20,
      category: 'Medicinal Plants',
      image:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
    },

    {
      id: 5,
      name: 'Tulsi',
      price: 10,
      category: 'Medicinal Plants',
      image:
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
    },

    {
      id: 6,
      name: 'Mint',
      price: 8,
      category: 'Medicinal Plants',
      image:
        'https://images.unsplash.com/photo-1512428813834-c702c7702b78',
    },

    {
      id: 7,
      name: 'Rose',
      price: 25,
      category: 'Flowering Plants',
      image:
        'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
    },

    {
      id: 8,
      name: 'Sunflower',
      price: 30,
      category: 'Flowering Plants',
      image:
        'https://images.unsplash.com/photo-1470509037663-253afd7f0f51',
    },

    {
      id: 9,
      name: 'Jasmine',
      price: 22,
      category: 'Flowering Plants',
      image:
        'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
    },
  ];

  const isAdded = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div>

      <Navbar setShowCart={setShowCart} />

      <div className="products-container">

        {plants.map((plant) => (

          <div className="plant-card" key={plant.id}>

            <img src={plant.image} alt={plant.name} />

            <h3>{plant.name}</h3>

            <p>${plant.price}</p>

            <p>{plant.category}</p>

            <button
              disabled={isAdded(plant.id)}
              onClick={() => dispatch(addToCart(plant))}
            >
              {isAdded(plant.id)
                ? 'Added to Cart'
                : 'Add to Cart'}
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ProductList;