import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from './navigation_bar/NavigationBar';
import ScrollDownArrow from './scroll_down_arrow/ScrollDownArrow'
import ColorChoice from './colorСhoice/ColorChoice';
import { BackgroundColorContext } from '../../App';
import { headerTitle, motto } from '../../constants/headerComponentData';
import './header.scss';
import backView from '../../assets/images/header_bg.png'


function Header({ colorOption }) {
   const background = `${useContext(BackgroundColorContext)},url(${backView})`;

   return (
      <div className='headerWrapper' style={{ background }}>
         <Container>
            <div className='header'>
               <div className='headerMenu'>
                  <NavigationBar />
               </div>
               <div className='headerTitle'>
                  <h1>{headerTitle}</h1>
                  <h4>{motto}</h4>
               </div>
               <ScrollDownArrow linkTo={'gallery'} />
            </div>
         </Container>
         <ColorChoice colorOption={colorOption} />
      </div>
   )
}

export default Header