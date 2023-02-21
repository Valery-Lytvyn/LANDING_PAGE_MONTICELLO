import React from 'react';
import { Card } from 'react-bootstrap';
import './newsCard.scss';

function NewsCard({ img, title, text, photo, autor, date }) {
   return (
      <Card >
         <Card.Img variant='top' src={img} />
         <Card.Body>
            <Card.Title className='title'>{title}</Card.Title>
            <Card.Text className='text'>{text}
            </Card.Text>
            <div className='row'>
               <div className='col'>
                  <img
                     src={photo}
                     alt='photo'
                  />
               </div>
               <div className='col'>
                  <Card.Text className='autor'>{autor}
                  </Card.Text>
                  <Card.Text className='data'>{date}
                  </Card.Text>
               </div>
            </div>
         </Card.Body>
      </Card>
   )
}

export default NewsCard