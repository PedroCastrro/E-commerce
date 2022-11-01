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
          <Img1 src={Product1} alt="" />
          <Img src={Product1} alt="" />
          <Img src={Product2} alt="" />
          <Img src={Product3} alt="" />
          <Img src={Product4} alt="" />
        </Section>
        <Aside>

        </Aside>
      </Body>
    </div>
  )
}

export default Collections
