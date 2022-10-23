import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';



const AboutContainer = styled.header`

    display: flex;
    justify-content: center;
    align-items: center; 
    margin: 0 auto;
    width: 80%;
    
    ${mq.maxWidth('md')`
         width: 100%;
    `}

    .content_img {
        opacity: 0.7;
        padding-right: 30px; 
    }

    .content_img img {
        width: 100%;

        ${mq.maxWidth('sm')`
            display: none;  
        `}
            
    }


    .content_txt {
        width: 90%;
        padding: 50px 20px;
        text-align: center;
        opacity: 0.8;
        margin: 0 auto;
        /* background-color: pink; */
        
        ${mq.maxWidth('sm')`
             width: 100%;
             margin: 0 auto;
             padding: 50px 10px;
         `}
    }


    .content_txt h1 {
        font-size: 35px;
    }

    .content_txt h5 {
        font-size: 20px;
        padding: 30px 0;
    }

    .content_txt p {
        line-height: 40px;
        font-size: 14px;
        text-align: start;
        line-height: 1.8;
    }

    hr {
        color: black;
    }   

`

const About = () => {
  return (
    <AboutContainer>
        <div className="content_img">
            <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="aboutImg"/>
        </div>
        <div className="content_txt">
            <h1>About Catering</h1>
            <br />
            <h5>Tradition since 1889</h5>
            <p><span>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
        </div>

        <hr />
        
    </AboutContainer>
  );
}

export default About;