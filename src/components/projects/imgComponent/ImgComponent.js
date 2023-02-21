import React from 'react';
import './imgComponent.scss';

function ImgComponent({ background }) {
   return (
      <div className='projectImg' style={{ background: `${background}` }}>
      </div>
   )
}

export default ImgComponent