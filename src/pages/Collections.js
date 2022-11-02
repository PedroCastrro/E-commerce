import React, { useEffect, useRef, useState } from 'react'

import Product1 from '../imagem/image-product-1.jpg'
import Product2 from '../imagem/image-product-2.jpg'
import Product3 from '../imagem/image-product-3.jpg'
import Product4 from '../imagem/image-product-4.jpg'

import {Body, Section, Img1, Img, Aside} from '../styles/styles'

import Header from '../components/Header'

function Collections() {

  return (
      <div>
      <Header />
      <Body>
        <Section>
          <Img1 src={ Product1 } alt="" />
          <Img src={ Product1 } alt="" />
          <Img src={ Product2} alt="" />
          <Img src={ Product2 } alt="" />
          <Img src={ Product2 } alt="" />
        </Section>
      </Body>
      <Aside>
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
      </Aside>
      </div>
  )
}

export default Collections
