import React from 'react';
import styled from "styled-components";

import img01 from '../assets/img/img01.jpg'
import img02 from '../assets/img/img02.jpg'
import img03 from '../assets/img/img03.jpg'
import img04 from '../assets/img/img04.jpg'
import img05 from '../assets/img/img05.jpg'

const ThumbList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 640;
    margin: auto;
    display: flex;

    li {
        width: 20%;

        a {
            display: block;
            margin: 10px;

            img {
                width: 100%;
            }
        }
    }

`

const Viewer = styled.div`
    width: 620px;
    margin: auto;
    padding: 0 10px;

    img {
        width: 100%;
        object-fit: cover;
    }
`

const imgList = [
    {img: img01, title: '테스트 이미지1'},
    {img: img02, title: '테스트 이미지2'},
    {img: img03, title: '테스트 이미지3'},
    {img: img04, title: '테스트 이미지4'},
    {img: img05, title: '테스트 이미지5'},
]

const ImageEx = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const onThumbnailClick = (e) => {
       const href = e.currentTarget.getAttribute('href');
       const idx = parseInt(href.substring(1));
        console.log(href, idx)
       setCurrentIndex(idx);
    }

    const {img: currentImg, title: currentTitle} = React.useMemo(()=> {
        return imgList[currentIndex];
    }, [currentIndex]);

 
    return (
        <div>
            <h1>ImageEx</h1>
            <ThumbList>
                {imgList.map((v, i) => {
                    return (
                        <li key={i}>
                            <a href={`#${i}`} title={v.title} onClick={onThumbnailClick} >
                                <img src={v.img} alt={v.title}/>
                            </a>
                        </li>
                    )
                })}
            </ThumbList>
            <Viewer>
                <img src={currentImg} alt={currentTitle}/>
            </Viewer>
        </div>
    )
}

export default ImageEx;