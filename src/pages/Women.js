import React from 'react';

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
          <img src={ Women0 } alt="" />
          <img src={ Women1 } alt="" />
          <img src={ Women2 } alt="" />
          <img src={ Women3 } alt="" />
          <img src={ Women4 } alt="" />
        </main>
      </body>
    </div>
  );
}

export default Women;
