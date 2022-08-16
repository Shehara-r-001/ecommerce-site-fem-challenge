import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import './cart.css';
import Data from '../../data/data.json';
import { ImBin } from 'react-icons/im';

const Cart = () => {
  const count = useAppSelector((state) => state.count.value);
  return (
    <div className='cart'>
      <div className='cart__titleCont'>
        <h1 className='cart__title'>Cart</h1>
      </div>
      {count > 0 ? (
        <div>
          <div className='cart__itemCont'>
            <div>
              <img src={Data[0].thumbUrl} alt='' className='cart__thumb' />
            </div>
            <div className='cart__descCont'>
              <p className='cart__item-name'>Autumn limited edition</p>
              <p className='cart__item-name'>
                $125.00 x {count} = ${125.0 * count}
              </p>
            </div>
            <ImBin className='cart__binIcon' />
          </div>
          <button className='cart__btn'>Checkout</button>
        </div>
      ) : (
        <p className='cart__empty'>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
