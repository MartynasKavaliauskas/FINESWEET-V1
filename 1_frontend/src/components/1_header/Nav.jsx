import React from 'react';
import { Link } from 'react-router-dom';

import { BsTelephoneFill } from 'react-icons/bs';

import {
  StyledNavbarWrapper,
  StyledHeader,
  StyledLogo,
  StyledNavbar,
  StyledUl,
  StyledLi,
  NavbarSeparator,
  StyledNavbarContactWrapper,
} from './Nav.style';

const Nav = () => {
  return (
    <StyledHeader>
      <StyledNavbarWrapper>
        <StyledLogo>finsweet</StyledLogo>
        <StyledNavbar>
          <StyledUl>
            <StyledLi>
              <Link to='/'>Home</Link>
            </StyledLi>
            <StyledLi>
              <Link to='/about'>About us</Link>
            </StyledLi>
            <StyledLi>
              <Link to='/servises'>Services</Link>
            </StyledLi>
            <StyledLi>
              <Link to='/blog'>Blog</Link>
            </StyledLi>
            <StyledLi>
              <Link to='/contact'>Contact</Link>
            </StyledLi>
          </StyledUl>
          <NavbarSeparator></NavbarSeparator>
          <StyledNavbarContactWrapper>
            <div className='phoneLogo'>
              <BsTelephoneFill />
            </div>
            <div>
              <p>Road Assistence</p>
              <p>1800 265 24 52</p>
            </div>
          </StyledNavbarContactWrapper>
        </StyledNavbar>
      </StyledNavbarWrapper>
    </StyledHeader>
  );
};

export default Nav;
