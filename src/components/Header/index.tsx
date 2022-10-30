import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import portalGif from '../../assets/images/portal.gif'
import { HeaderContainer, NavigationContainer } from './style'

function Header() {
  return (
    <HeaderContainer>
      <NavigationContainer>
        <NavLink to={'/'}>
          <img src={portalGif} alt="" />
        </NavLink>
        <div>
          <NavLink to={'/characters'}>Personagens</NavLink>
          <NavLink to={'/locals'}>Locais</NavLink>
          <NavLink to={'/episodes'}>Episódios</NavLink>
        </div>
      </NavigationContainer>
    </HeaderContainer>
  )
}

export default Header
