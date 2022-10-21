import React from 'react';
import styled from 'styled-components';
// import mq from '../../MediaQuery';
import About from './About';
import Contact from './Contact';
import Jumbotron from './Jumbotron';
import Menu from './Menu';


const MainContainer = styled.section`
    font-family: 'Times New Roman, Georgia, Serif';
    max-width: 1200px;
    margin: auto;
    background-color: #fff;
    border-left: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;

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