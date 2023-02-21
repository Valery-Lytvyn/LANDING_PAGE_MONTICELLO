import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../logo/Logo';
import SocialMediaIcons from '../../social_media_icons/SocialMediaIcons';
import { navigationItems } from '../../../constants/headerComponentData';
import './navigationBar.scss';

function NavigationBar() {

   return (
      <div className='navbar  w-100'>
         <div className='row justify-content-between align-items-center w-100 p-0 m-0'>
            <div className='logo order-0 col-12 col-md-5 col-lg-4 d-flex justify-content-center justify-content-md-start'>
               <Logo />
            </div>
            <div className='d-flex order-2 order-lg-1 justify-content-end justify-content-lg-center col-6 col-md-3 col-lg-6 p-0 m-0'>
               <Navbar
                  collapseOnSelect expand='lg' bg='none' variant='dark' className='justify-content-end'
               >
                  <Navbar.Toggle aria-controls='navbarScroll' data-bs-toggle='collapse' data-bs-target='#navbarScroll'
                  />
                  <Navbar.Collapse id='navbarScroll'>
                     <Nav className=' justify-content-between text-end'>
                        {
                           navigationItems.map((item, index) => (
                              <Link className='navItem px-2'
                                 key={index}
                                 to={item}
                                 duration={200}
                                 smooth={true}
                              >{item}</Link>
                           ))
                        }
                     </Nav>
                  </Navbar.Collapse>
               </Navbar>
            </div>
            <div className='order-1 order-lg-2  col-6 col-md-3 col-lg-2 p-0 m-0 h-100 d-flex justify-content-cenetr align-items-center'>
               <SocialMediaIcons />
            </div>
         </div>
      </div >
   )
}

export default NavigationBar