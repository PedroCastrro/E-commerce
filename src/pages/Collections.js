import React from 'react'

import Product1 from '../imagem/image-product-1.jpg'
import Product2 from '../imagem/image-product-2.jpg'
import Product3 from '../imagem/image-product-3.jpg'
import Product4 from '../imagem/image-product-4.jpg'

import {
  Aside,
  Main,
  Body,
  Img1,
  Img,
  H2,
  H1,
  P,
  Input,
} from '../styles/styles'

import Header from '../components/Header'

function Collections() {
  return (
    <div>
      <Header />
      <Body>
        <Main>
          <Img1 src={Product1} alt="" />
          <Img src={Product1} alt="" />
          <Img src={Product2} alt="" />
          <Img src={Product3} alt="" />
          <Img src={Product4} alt="" />
        </Main>
        <Aside>
          <H2>Sneaker Company</H2>
          <H1>
            Fall Limited <br /> Sneaker
          </H1>
          <P>
            These low-profile are your perfect casual wear companion.
            <br />
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </P>
          <section>
            <span>$125.00</span>
            <span>50%</span>
          </section>
          <span>$250.00</span>
          <section>
            <input type="number" />
            <Input type="button" value="Add to cart" />
          </section>
        </Aside>
      </Body>
    </div>
  )
}

export default Collections
