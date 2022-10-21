import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import mq from '../MediaQuery';

const NavbarContainer = styled.nav`
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;

    div {
        max-width: 1200px;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;

        a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
            font-size: 16px;

            ${mq.maxWidth('sm')`
                font-size: 14px;
            `}

            &:hover {
                background-color: #ddd;
                color: black;
            }

            &.active {
                background-color: #666;
                color: white;
            }
            
            &.right {
                ${mq.minWidth('sm')`
                margin-left: auto`}
            }
        }
    }
`

function Navbar() {
  return (
    <NavbarContainer>
        <div>
            <NavLink to ="/">Home</NavLink>
            <NavLink to ="/link1">link1</NavLink>
            <NavLink to ="/link2">link2</NavLink>
            <NavLink to ="/link3" className='right'>link3</NavLink>
        </div>
    </NavbarContainer>
  );
}

export default Navbar;