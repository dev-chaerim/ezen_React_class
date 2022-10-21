import React from 'react';
import styled from 'styled-components';



const AboutContainer = styled.header`

    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 80px 30px; 

    .content_img {
        opacity: 0.7;
    }

    .content_img img {
        width: 500px;
    }


    .content_txt {
        width: 500px;
        padding: 50px 50px;
        justify-content: center;
        text-align: center;
        opacity: 0.8;
    }


    .content_txt h1 {
        font-size: 40px;
        margin-bottom: 40px;
        
    }
    .content_txt h5 {
        font-size: 20px;
        padding: 30px 0;
    }

    .content_txt p {
        line-height: 40px;
        font-size: 18px;
        text-align: start;
        background-color: #eee;
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
            <p><span>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</span></p>
        </div>

        <hr />
        
    </AboutContainer>
  );
}

export default About;