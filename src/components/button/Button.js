import React, { useState } from 'react';
import './button.scss';

export default function Button({ title, id, showMore, addButtonIndex, backgroundColor }) {

   const hoverStyle = {
      background: `${backgroundColor}`,
      fontSize: '18px',
      border: 'none',
      boxShadow: '0px 0px 10px 1px #4b5562',
   }
   const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

   return (
      <div className='button'
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         style={isHover ? hoverStyle : null}
         id={id}
         onClick={(e) => {
            showMore()
            addButtonIndex(e.target.id)
         }}
      > {title}</div >
   )
}
