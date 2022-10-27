import React, {memo, useCallback} from 'react';
import styled from 'styled-components';

const CollapseContainer = styled.div`
    .collapse-title {
        background-color: #777;
        color: white;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        font-weight: normal;
        margin: 0;
        text-align: center;
        outline: none;
        font-size: 15px;

        &.active, &:hover {
            background-color: #555;
        }   
    }

    .collapse-content {
        padding: 0 18px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        background-color: #eee;
    }
`
const Collapse = memo(({title, content}) => {
    const onCollapseTitleClick = useCallback((e) => {
        const current = e.currentTarget;
        current.classList.toggle('active');
        const content = current.parentElement.querySelector('.collapse-content');

        if(content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }, [])
    return (
        <CollapseContainer>
            <h1 className="collapse-title" onClick={onCollapseTitleClick}>{title}</h1>
            <div className="collapse-content">
                <p>{content}</p>
            </div>
        </CollapseContainer>
    )
})

export default Collapse;