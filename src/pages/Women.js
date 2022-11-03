import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Women0 from '../imagem/Women.jpg';
import Women1 from '../imagem/Women1.webp';
import Women2 from '../imagem/Women2.webp';
import Women3 from '../imagem/Women3.jpg';
import Women4 from '../imagem/Women4.webp';

import Header from '../components/Header';

function Women() {
  return (
    <div>
        <Header />
      <body>
        <main>
        <Carousel>
        <Carousel.Item>
          <img
            src={ Women0 }
            alt="Primeira"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ Women1 }
            alt="Segunda"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ Women2 }
            alt="Terceira"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ Women3 }
            alt="Quarta"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ Women4 }
            alt="Quarta"
          />
        </Carousel.Item>
      </Carousel>
        </main>
      </body>
    </div>
  );
}

export default Women;
