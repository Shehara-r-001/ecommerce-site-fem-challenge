import './details.css';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { storeCount } from '../../redux/countSlice';

const Details = () => {
  const dispatch = useAppDispatch();
  const [itemCount, setItemCount] = useState<number>(0);

  const Increment = () => {
    setItemCount(itemCount + 1);
    // dispatch(storeCount(itemCount));
  };

  const Decrement = () => {
    setItemCount(itemCount - 1);
    // dispatch(storeCount(itemCount));
  };

  return (
    <div className='details'>
      <p className='details__subTopic'>sneaker company</p>
      <h1 className='details__topic'>Fall limited edition sneackers</h1>
      <p className='details__desc'>
        These low-profile sneakers are your perfect casual wear companian.
        Feturing a durable rubber outer sole, they'll widthstand everything the
        weather can offer.
      </p>
      <div className='details__pricesCont'>
        <div className='details__pricesCont-sub'>
          <h1 className='details__price'>$125.00</h1>
          <p className='details__discount'>50%</p>
        </div>
        <p className='details__originalPrice'>$250.00</p>
      </div>
      <div className='details__cartCont'>
        <div className='details__countCont'>
          <div
            className={`details__iconDiv ${itemCount <= 0 && 'iconDiv_hide'}`}
            onClick={Decrement}
          >
            <BiMinus className='details__icon' />
          </div>
          <p className='details__amount'>{itemCount}</p>
          <div className={`details__iconDiv`} onClick={Increment}>
            <BiPlus className='details__icon' />
          </div>
        </div>
        <button
          className='details__button'
          onClick={() => dispatch(storeCount(itemCount))}
        >
          <AiOutlineShoppingCart className='details__cartIcon' />
          <p className='details__cartText'>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Details;
