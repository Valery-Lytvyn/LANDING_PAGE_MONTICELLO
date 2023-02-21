import React, { useContext, } from 'react';
import { BackgroundColorContext } from '../../App';
import { Container } from 'react-bootstrap';
import SocialMediaIcons from '../social_media_icons/SocialMediaIcons';
import Logo from '../logo/Logo';
import backView from '../../assets/images/footer_bg.jpg';
import './footer.scss';


function Footer() {

   const background = ` ${useContext(BackgroundColorContext)}, url(${backView})`;

   return (
      <div className='footerWrapper' style={{ background }}>
         <Container>
            <div className='contact'>
               <div className='row justify-content-center align-items-center'>
                  <div className='col-md-6'>
                     <div className='d-flex  justify-content-center justify-content-md-end pe-md-3'>
                        <Logo />
                     </div>
                  </div >
                  <div className='pt-3 pt-md-0 col-md-6' >
                     <div className='social d-flex justify-content-center justify-content-md-start'>
                        <SocialMediaIcons />
                     </div>
                  </div>
               </div>
               <div className='row  mt-3'>
                  <div className='col-md-6 p-0 m-0'>
                     <div className='copyrights text-center text-md-end pe-md-3'>Copyrights © 2017 Monticello Group</div>
                  </div>
                  <div className='col-md-6 p-0 m-0'>
                     <div className='ps-md-3 text-center text-center text-md-start'>Made with <span>&#9829;</span> by Ga Huy</div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   )
}

export default Footer
