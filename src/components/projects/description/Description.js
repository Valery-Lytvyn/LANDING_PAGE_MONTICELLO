import React from 'react';
import CollapseButton from '../../collapseButton/CollapseButton';
import Location from '../location/Location';
import './description.scss';

function Description({
   id,
   firstTitle,
   secondTitle,
   descriptionText,
   collapseText,
   locationText, }) {
   return (
      <div className='description h-100'>
         <div className='titleStringFirst text-center text-lg-start w-100'>
            {firstTitle}
         </div>
         <div className='titleStringSecond text-center text-lg-start w-100'>
            {secondTitle}
         </div>
         <div className='descriptionText'>
            {descriptionText}
         </div>
         <div className='projectCollapseButton my-2'>
            <CollapseButton
               id={id}
               title={'more details'}
               ariaName={'moreDetails'}
               collapseText={collapseText}
            />
         </div>
         <Location text={locationText} />
      </div>
   )
}

export default Description