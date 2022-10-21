import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import mq from '../MediaQuery';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 8px 12px;
    box-shadow: 0 4px 4px -4px #d5d5d5;
    position: fixed;
    z-index: 1;
    width: 100%;
    font-size: 20px;


    .navbarLogo {
        padding: 8px 16px;
    }

    .navbarMenu {
        display: flex;
        margin: 0 30px;
    }

    .navbarMenu a {
        padding: 8px 12px;
        opacity: 0.8;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    .navbarMenu a:hover{
        background-color: #d5d5d5;
    }

    .navbarLogo:hover {
        background-color: #d5d5d5;
    }
`

function Navbar() {
  return (
    <NavbarContainer>
        <div className='navbarLogo'>
            <NavLink to ="/">Gourmet au Catering</NavLink>
        </div>
        <div className='navbarMenu'>
            <NavLink to ="/About" className='right'>About</NavLink>
            <NavLink to ="/Menu"  className='right'>Menu</NavLink>
            <NavLink to ="/Contact" className='right'>Contact</NavLink>
        </div>
    </NavbarContainer>
  );
}

export default Navbar;