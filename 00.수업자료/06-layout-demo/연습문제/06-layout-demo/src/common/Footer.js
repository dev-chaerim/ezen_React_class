import React from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';

const FooterContainer = styled.footer`
    padding: 50px;
    background-color: #e9e9e9;
    display: flex;
    justify-content: center;
    opacity: 0.7;

    a {
      text-decoration: underline;
    }

    ${mq.maxWidth('sm')`
        padding: 10px;
        font-size: 14px;
    `}
`

function Footer() {
  return (
    <FooterContainer>
        <p>Power by  <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p>
    </FooterContainer>
  );
}

export default Footer;