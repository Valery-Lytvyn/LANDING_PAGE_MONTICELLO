import React from 'react';

function Cell({ picture, className }) {

   return (
      <div className={className}>
         <div className='h-100 w-100' style={
            {
               background: `url(${picture}) no-repeat center center`,
               minHeight: '215px',
               backgroundSize: 'cover',
            }
         }>
         </div>
      </div>
   )
}

export default Cell