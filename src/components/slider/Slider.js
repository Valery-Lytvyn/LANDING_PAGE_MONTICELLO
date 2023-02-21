import React from 'react';
import Carousel from 'react-multi-carousel';
import NewsCard from '../news/newsCard/NewsCard';
import { newsCardContent, responsive } from '../../constants/newsComponentData';
import 'react-multi-carousel/lib/styles.css';
import './slider.scss';

function Slider() {
   return (
      <Carousel
         responsive={responsive}
         swipeable={false}
         draggable={false}
         showDots={true}
         itemClass='px-2 mb-5'
         slidesToSlide={1}
         infinite={true}>
         {newsCardContent.map((item, index) => (
            <NewsCard
               key={index}
               img={item.image}
               title={item.title}
               text={item.text}
               photo={item.photo}
               autor={item.autor}
               date={item.date} />
         ))
         }
      </Carousel>
   )
}

export default Slider;