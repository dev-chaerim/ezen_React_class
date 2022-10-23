import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';



const HeaderImg = styled.header`

    text-align: center;
    position: relative;

    .headerImg {
        width: 100%;
        opacity: 0.7;

        ${mq.maxWidth('md')`
            width: 100%;
            font-size: 10px;
         `}
    }

    .headerTxt {
        /* background-color: aqua; */
        color: #807d7d;
        font-size: 35px;
        position: absolute;
        bottom: 30px;
        left: 25px;
    }

    



`

const Jumbotron = () => {
  return (
    <HeaderImg>
         <img className="headerImg" src="https://www.w3schools.com/w3images/hamburger.jpg" alt="header_img"/>
        <div>
            <h1 className="headerTxt">Le Catering</h1>
        </div>
    </HeaderImg>
  );
}

export default Jumbotron;