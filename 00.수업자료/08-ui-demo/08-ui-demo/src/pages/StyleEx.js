import React, {memo} from 'react';
import styled from 'styled-components';


const Box = styled.div`
    &.box1 {
        border: 10px solid black;
        margin: 10px auto;
        padding: 30px;
        text-align: center;
        width: auto;
    }

    &.box2 {
        border: 10px dotted red;
        margin: 10px auto;
        padding: 50px;
        text-align: left;
        width: 50%;
    }
`

const Button = styled.input`
    margin: 0, 5px;
`
const StyleEx = memo(() => {
    const myBox = React.useRef();

    return (
        <div>
            <h1>StyleEx</h1>
            <Box className='box1' ref={myBox}>
                <h1>Hello React</h1>
            </Box>

            <Button type='button' value='(폰트) orange' onClick={e => {
                myBox.current.style.color = '#f60';
            }} />

            <Button type='button' value='(폰트) sky' onClick={e => {
                myBox.current.style.setProperty('color', '#06f');
            }} />

            <Button type='button' value='(배경) yellow' onClick={e => {
                myBox.current.style.backgroundColor = '#ff0';
            }} />

            <Button type='button' value='(배경) pink' onClick={e => {
                myBox.current.style.setProperty('background-color', '#f0f');
            }} />

            <Button type='button' value='box1 클래스적용' onClick={e => {
                myBox.current.classList.add('box1');
                myBox.current.classList.remove('box2');
            }} />

            <Button type='button' value='box2 클래스적용' onClick={e => {
                myBox.current.classList.add('box2');
                myBox.current.classList.remove('box1');
            }} />
        </div>
    )
})

export default StyleEx;