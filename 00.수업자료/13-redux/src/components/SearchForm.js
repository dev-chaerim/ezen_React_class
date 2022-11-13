import React, { memo, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQueryString } from '../hooks/useQueryString';

const Form = styled.form`
    background-color: #fff;
    display: flex;
    padding: 5px 10px;
    margin: 0;

    input, button {
        display: block;
        margin-right: 5px;
        font-size: 16px;
        padding: 0 10px;
        height: 30px;
    }

    input {
        flex: 1;
    }

    button {
        width: 70px;
        flex: none;
    }
`

const SearchForm = memo(() => {
    const navigate = useNavigate();

    const { query } = useQueryString();

    const searchInput = useRef();

    const onSearchSubmit = useCallback((e) => {
        e.preventDefault();
        navigate(`${window.location.pathname}?query=${e.target.query.value}`);
    }, [navigate]);

    React.useEffect(() => {
        if(query) {
            searchInput.current.value = query;
        }
    }, [query]);

    return (
        <div>
            <Form onSubmit={onSearchSubmit}>
                <input type="search" name='query' defaultValue={query} ref={searchInput}/>
                <button type='submit'>검색</button>
            </Form>
        </div>
    )
})

export default SearchForm;