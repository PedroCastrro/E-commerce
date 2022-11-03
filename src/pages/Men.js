import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Men0 from '../imagem/men.jpg';
import Men1 from '../imagem/men1.jpg';
import Men2 from '../imagem/men2.webp';
import Men3 from '../imagem/men3.jpeg';
import Men4 from '../imagem/men4.jpg';

import Header from '../components/Header';

function Men() {
  return (
    <div>
        <Header />
     <body>
      <main>
        <section>
        <Carousel>
        <Carousel.Item>
          <img
            src={ Men0 }
            alt="Primeira"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ Men1 }
            alt="Segunda"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ Men2 }
            alt="Terceira"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ Men3 }
            alt="Quarta"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ Men4 }
            alt="Quarta"
          />
        </Carousel.Item>
      </Carousel>
        </section>
      </main>
     </body>
    </div>
  );
}

export default Men;
