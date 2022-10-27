import React, {memo, useCallback, useRef} from 'react';
import ListContainer from '../components/ListContainer';

const CreateElementEx = memo (() => {
    const comment = useRef();
    const list = useRef();

    const css = {
        marginRight: '10px;'
    };

    const getItem = useCallback((clsName) =>{
        const li = document.createElement('li');
        li.classList.add('item', clsName);
        li.innerHTML = comment.current.value;
        li.addEventListener('click', (e)=> {
            e.currentTarget.remove();
        })

        return li;
    }, []);

    const onAppendChildClick = useCallback((e)=> {
        const li = getItem('blue');
        list.current.appendChild(li);
    },[list, getItem]);

    const onInsertBeforeClick = useCallback((e)=> {
        list.current.insertBefore(getItem('orange'), null)
    },[list, getItem]);

    const onInsertBefore2Click = useCallback((e)=> {
        list.current.insertBefore(getItem('pink'), document.querySelector('li:first-child'));
    },[list, getItem]);

    return (
        <div>
            <h1>CreateElementEx</h1>
            <input type="text" style={css} ref={comment}/>
            <button type="button" style={css} onClick={onAppendChildClick}>appendChild</button>
            <button type="button" style={css} onClick={onInsertBeforeClick}>insertBefore1</button>
            <button type="button" style={css} onClick={onInsertBefore2Click}>insertBefore12</button>
            <hr/>
            <ListContainer ref={list} />
        </div>
    )
})

export default CreateElementEx;