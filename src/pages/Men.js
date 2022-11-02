import React from 'react';

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
          <img src={ Men0 } alt="" />
          <img src={ Men1} alt="" />
          <img src={ Men2 } alt="" />
          <img src={ Men3} alt="" />
          <img src={ Men4} alt="" />
        </section>
      </main>
     </body>
    </div>
  );
}

export default Men;
