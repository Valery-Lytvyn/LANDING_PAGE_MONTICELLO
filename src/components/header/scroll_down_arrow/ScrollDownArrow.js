import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link } from 'react-scroll';
import './scrollDownArrow.scss';

function ScrollDownArrow({ linkTo }) {
   return (
      <div className='arrowDown d-none d-xl-block'>
         <Link
            to={linkTo}
            smooth={true}
            duration={200}
         >
            <RiArrowDownSLine />
         </Link>
      </div>
   )
}

export default ScrollDownArrow