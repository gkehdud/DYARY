import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <h1>Post</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='dsadsdadsada'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-1.jpg'
              text='rererw'
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='qewqeqw'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='wnicdsadsadsadsadsadsadsadsadsadnicdsadsadsadsadsadsadsadsadsadeeq'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
