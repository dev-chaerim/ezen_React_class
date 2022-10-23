import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import About from './About';
import Contact from './Contact';
import Jumbotron from './Jumbotron';
import Menu from './Menu';


const MainContainer = styled.section`
    font-family: 'Times New Roman, Georgia, Serif';
    max-width: 90%;
    margin: auto;
    background-color: #fff;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;

    ${mq.maxWidth('sm')`
        max-width: 100%;
    `}

`

const index = () => {
  return (
    <MainContainer>
        <Jumbotron />
        <About />
        <Menu />
        <Contact />
    </MainContainer>
  );
}

export default index;