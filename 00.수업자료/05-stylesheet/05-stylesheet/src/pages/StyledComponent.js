import React from 'react';

import styled, { css } from 'styled-components';

const MyGridContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 1024px;
    border: 5px solid #cc0;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const MyGridItem = styled.li`
    width: ${props => props.width};
`

const MyBox = styled.div`
    border: 3px dotted #000;
    background-color: #eee;
    height: 100%;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    color: ${(props) => props.color || 'black'};

    &:hover {
        transform: scale(1.05, 1.05) rotate(-10deg);
        background-color: ${(props) => props.color || '#eeeeee'};
        color: #fff;
    }

    ${(props) => props.number % 2 === 1 && 
        css`
            font-weight: bold;
            font-style: italic;
            text-decoration: underline;
         `}

`;

const StyledComponent = () => {

    const myColors =['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink'];
    const myWidth = 100 / myColors.length + '%';

    return (
        <div>
            <h2>StyledComponent</h2>
            <MyGridContainer>
                <MyGridItem width={'30%'}>
                    <MyBox>Item1</MyBox>
                </MyGridItem >
                <MyGridItem width={'10%'}>
                    <MyBox>Item2</MyBox>
                </MyGridItem>
                <MyGridItem width={'20%'}>
                    <MyBox>Item3</MyBox>
                </MyGridItem>
                <MyGridItem width={'15%'}>
                    <MyBox>Item4</MyBox>
                </MyGridItem>
                <MyGridItem width={'25%'}>
                    <MyBox>Item5</MyBox>
                </MyGridItem>
            </MyGridContainer>

            <h3>배열 원소를 활용한 컴포넌트 사용</h3>
            <MyGridContainer>
                {myColors.map((item, index) => {
                    return (
                        <MyGridItem key={index} width={myWidth}>
                            <MyBox color={item} number={index}>{item}</MyBox>
                        </MyGridItem>
                    )
                })}
            </MyGridContainer>
        </div>
    )
};

export default StyledComponent;