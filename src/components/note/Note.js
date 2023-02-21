import React from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Note({ isShowed, buttonIndex, id, collapseText }) {
   return (
      <Collapse in={isShowed && buttonIndex == id}
         className='m-1 p-2 border border-dark-subtle'>
         <div>
            {collapseText}
         </div>
      </Collapse >
   )
}

export default Note