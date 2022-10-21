import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import FakeImg from '../../common/FakeImg';


const PostContainer = styled.section`
    flex: 0 1 auto;
    background-color: skyblue;
    padding: 20px;
    box-sizing: border-box;

    ${mq.maxWidth('sm')`
        flex: none;
        width: 100%;
    `}

    h2 {
        font-size: 24px;
        font-weight: 700;
        margin: 10px auto;
    }

    h3 {
        font-size: 18px;
        font-weight: 600;
        margin: 10px auto;
    }

    p {
        background-color: #fff;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 7px;
    }

`

const Post = () => {
  return (
    <div>
        { [0,1,2,3].map((v, i) => {
            return (
                <PostContainer key={i}>
                    <h2>TITLE HEADING</h2>
                    <h3>Title description, Dec 7, 2017</h3>
                    <FakeImg height='200'>Image</FakeImg>
                    <p>Some text ...</p>
                    <p>Sunt in culpa qui officia deserunt mllit anm id set laalk dkjfk dldddl ajdkj dkfjdk dkfjklajdl lklldkjddddddddddddddddddddddddddddddddddddd </p>
                    <br />
                </PostContainer>
            )
        })}
    </div>
  );
}

export default Post;