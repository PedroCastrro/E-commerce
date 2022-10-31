import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Ul, Li} from '../styles/styles';

import Logo from '../imagem/logo.svg'
import Sale from '../imagem/icon-cart.svg'
import Avatar from '../imagem/image-avatar.png'

export default function Header() {
  return (
    <div>
      <Navbar>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <Ul>
          <Li>
            <Link to="/">Collections</Link>
          </Li>
          <Li>
            <Link to="/Men">Men</Link>
          </Li>
          <Li>
            <Link to="/Women">Women</Link>
          </Li>
          <Li>
            <Link to="/About">About</Link>
          </Li>
          <Li>
            <Link to="/Conect">Conect</Link>
          </Li>
        </Ul>
        <img src={Sale} alt="" />
        <img src={Avatar} alt="" />
      </Navbar>
    </div>
  )
}
