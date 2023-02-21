import React, { useContext } from 'react';
import { BackgroundColorContext } from '../../App';
import Container from 'react-bootstrap/Container';
import Slider from '../slider/Slider';
import { newsTitle } from '../../constants/newsComponentData';
import './news.scss';
import backView from '../../assets/images/news_bg.png';


function News() {

   const background = `url(${backView}), ${useContext(BackgroundColorContext)}`;

   return (
      <div className='newsWraper' style={{ background }}>
         <Container>
            <div className='news'>
               <div className='newsTitle'>
                  {newsTitle}
               </div>
            </div>
            <div className='carousel'>
               <Slider />
            </div>
         </Container>
      </div>
   )
}

export default News