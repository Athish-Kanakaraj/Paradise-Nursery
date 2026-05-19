import React from 'react';

import Navbar from './Navbar';

import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../redux/CartSlice';

function ProductList({ setShowCart }) {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const plants = {

    "Air Purifying Plants": [

      {
        id: 1,
        name: 'Snake Plant',
        price: 15,
        image:
          'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg',
      },

      {
        id: 2,
        name: 'Spider Plant',
        price: 12,
        image:
          'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg',
      },

      {
        id: 3,
        name: 'Peace Lily',
        price: 18,
        image:
          'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
      },

    ],

    "Medicinal Plants": [

      {
        id: 4,
        name: 'Aloe Vera',
        price: 20,
        image:
          'https://images.pexels.com/photos/4108273/pexels-photo-4108273.jpeg',
      },

      {
        id: 5,
        name: 'Tulsi',
        price: 10,
        image:
          'https://images.pexels.com/photos/6157046/pexels-photo-6157046.jpeg',
      },

      {
        id: 6,
        name: 'Mint',
        price: 8,
        image:
          'https://images.pexels.com/photos/12417162/pexels-photo-12417162.jpeg',
      },

    ],

    "Flowering Plants": [

      {
        id: 7,
        name: 'Rose',
        price: 25,
        image:
          'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg',
      },

      {
        id: 8,
        name: 'Sunflower',
        price: 30,
        image:
          'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg',
      },

      {
        id: 9,
        name: 'Jasmine',
        price: 22,
        image:
          'https://images.pexels.com/photos/1394502/pexels-photo-1394502.jpeg',
      },

    ],

  };

  const isAdded = (id) => {

    return cartItems.some(
      item => item.id === id
    );

  };

  return (

    <div>

      <Navbar setShowCart={setShowCart} />

      {Object.entries(plants).map(
        ([category, items]) => (

          <div key={category}>

            <h2
              style={{
                marginLeft:'40px',
                marginTop:'30px',
                color:'green'
              }}
            >
              {category}
            </h2>

            <div className="products-container">

              {items.map((plant) => (

                <div
                  className="plant-card"
                  key={plant.id}
                >

                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    disabled={isAdded(plant.id)}
                    onClick={() =>
                      dispatch(addItem(plant))
                    }
                  >

                    {isAdded(plant.id)
                      ? 'Added to Cart'
                      : 'Add to Cart'}

                  </button>

                </div>

              ))}

            </div>

          </div>

        )
      )}

    </div>

  );
}

export default ProductList;
