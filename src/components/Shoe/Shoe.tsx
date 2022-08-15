import React, { useState } from 'react';
import './shoe.css';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import Data from '../../data/data.json';

const Shoe = () => {
  const [imageID, setImageID] = useState<number>(1);

  return (
    <div className='shoe__container'>
      <div className='shoe__imgCont'>
        <img src={Data[imageID - 1].imgUrl} alt='' className='shoe__image' />
        <div className='shoe__iconCont'>
          {imageID > 1 && (
            <div
              className='shoe__iconDiv shoe__icon-left'
              onClick={() => setImageID(imageID - 1)}
            >
              <BiChevronLeft className='shoe__LRIcons' />
            </div>
          )}
          {imageID <= 3 && (
            <div
              className='shoe__iconDiv shoe__icon-right'
              onClick={() => setImageID(imageID + 1)}
            >
              <BiChevronRight className='shoe__LRIcons' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shoe;
