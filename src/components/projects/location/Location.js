import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import './location.scss';

function Location({ text }) {
   return (
      <div className='location'>
         <MdLocationPin />
         <div className='locationDescription'>
            {text}
         </div>
      </div>
   )
}

export default Location