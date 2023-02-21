import React from 'react';
import { Container } from 'react-bootstrap';
import Cell from './cell/Cell';
import CollapseButton from '../collapseButton/CollapseButton';
import { galleryTitle, galleryCollapseText, galleryPictureArr } from '../../constants/galleryComponentData';
import './gallery.scss';


function Gallery() {
   return (
      <div className='gallery'>
         <Container>
            <div className='galleryTitle'>
               {galleryTitle}
            </div>
            <div className='galleryTable'>
               <div className='row p-0 m-0'>
                  <Cell picture={galleryPictureArr[0]} className={'col-12 col-lg-6 p-2 pt-0 pt-lg-2'} />
                  <div className='col-12 col-lg-6 p-0'>
                     <div className='row p-0 m-0'>
                        <Cell picture={galleryPictureArr[1]} className={'col-md-6 p-2'} />
                        <Cell picture={galleryPictureArr[2]} className={'col-md-6 p-2'} />
                     </div>
                     <div className='row p-0 m-0'>
                        <Cell picture={galleryPictureArr[3]} className={'col-md-6 p-2'} />
                        <Cell picture={galleryPictureArr[4]} className={'col-md-6 p-2'} />
                     </div>
                  </div>
               </div>
            </div>
            <div className='galleryCollapseButton'>
               <CollapseButton
                  id={3}
                  title={'SEE MORE'}
                  ariaName={'moreDetails'}
                  collapseText={galleryCollapseText}
               />
            </div>
         </Container>
      </div>
   )
}

export default Gallery
