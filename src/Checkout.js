import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpgg"
          alt="ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your Shopping Cart</h2>

          {basket.length === 0 ? (
            <p className='empty__cart'>Your cart is empty.</p>
          ) : (
            <FlipMove>
              {basket.map((item) => (
                <CheckoutProduct
                  key={item.id} // 
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </FlipMove>
          )}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
