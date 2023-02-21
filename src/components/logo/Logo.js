import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/images/logo.png';


function Logo() {
   const scrollToTop = () => {
      scroll.scrollToTop({
         duration: 200,
         smooth: true,
      });
   };

   return (
      <img src={logo} alt='logo' onClick={scrollToTop} />
   )
}

export default Logo