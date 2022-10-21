import React from 'react';
import styled from 'styled-components';



const HeaderImg = styled.header`

    text-align: center;
    position: relative;

    .headerImg {
        width: 100%;
        opacity: 0.7;
    }

    .headerTxt {
        /* background-color: aqua; */
        color: #807d7d;
        font-size: 35px;
        position: absolute;
        bottom: 40px;
        left: 50px;
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