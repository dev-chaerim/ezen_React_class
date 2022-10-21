import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import Side from './Side';
import Post from './Post';

const MainContainer = styled.section`
    max-width: 1200px;
    margin: auto;
    background-color: #fff;
    border-left: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;

    ${mq.maxWidth('sm')`
        flex-direction: column-reverse;
    `}

`

const index = () => {
  return (
    <MainContainer>
        <Side />
        <Post />
    </MainContainer>
  );
}

export default index;