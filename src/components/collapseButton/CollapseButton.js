import React, { useState, useContext } from 'react';
import { BackgroundColorContext } from '../../App';
import Button from '../button/Button';
import Note from '../note/Note';

function CollapseButton({ id, title, ariaName, collapseText }) {
   const [isShowed, setIsShowed] = useState(false);
   const [buttonIndex, setButtonIndex] = useState(null);
   const background = `${useContext(BackgroundColorContext)}`;

   const addButtonIndex = (index) => {
      setButtonIndex(index);
      setIsShowed(!isShowed);
   }

   const showMore = () => {
      setIsShowed(!isShowed);
   }

   return (
      <>
         <Button
            title={title}
            id={id}
            showMore={showMore}
            addButtonIndex={addButtonIndex}
            backgroundColor={background}
            aria-controls={ariaName}
            aria-expanded={isShowed && buttonIndex == id}
         />
         <Note isShowed={isShowed} buttonIndex={buttonIndex} id={id} collapseText={collapseText} />
      </>
   )
}

export default CollapseButton;