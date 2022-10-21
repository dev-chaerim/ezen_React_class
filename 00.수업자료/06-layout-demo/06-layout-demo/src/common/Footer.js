import React from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';

const FooterContainer = styled.footer`
    padding: 20px;
    font-size: 20px;
    text-align: center;
    background-color: #ddd;
    font-weight: 700;

    ${mq.maxWidth('sm')`
        padding: 10px;
        font-size: 14px;
    `}
`

function Footer() {
  return (
    <FooterContainer>
        <h2>Footer</h2>
    </FooterContainer>
  );
}

export default Footer;