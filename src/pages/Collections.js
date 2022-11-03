import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Product1 from '../imagem/image-product-1.jpg'
import Product2 from '../imagem/image-product-2.jpg'
import Product3 from '../imagem/image-product-3.jpg'
import Product4 from '../imagem/image-product-4.jpg'

import {} from '../styles/styles'

import Header from '../components/Header'

function Collections() {

  return (
      <div>
      <Header />
      <Carousel>
        <Carousel.Item>
          <img
            src={ Product1 }
            alt="Primeira"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ Product2 }
            alt="Segunda"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ Product3 }
            alt="Terceira"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ Product4 }
            alt="Quarta"
          />
        </Carousel.Item>
      </Carousel>
      <aside>
        <h2>Sneaker Company</h2>
        <h1>Fall Limited Sneaker</h1>
        <p>These low-profile are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything the
          weather can offer.
        </p>
        <span>$125.00</span>
        <section>
          <span>50%</span>
        </section>
        <span>$250.00</span>
        <ection>
          <input type="number" />
          <input type="button" value="Add to cart" />
        </ection>
      </aside>
      </div>
  )
}

export default Collections
