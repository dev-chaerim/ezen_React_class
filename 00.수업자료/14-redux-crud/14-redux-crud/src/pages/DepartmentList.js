import React, { memo, useCallback, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../slices/DepartmentSlice';

import styled from 'styled-components';
import { useQueryString } from '../hooks/useQueryString';

const ControlContainer = styled.form`
    position: sticky;
    top:0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;

    .controll {
        margin-right: 5px;
        display: inline-block;
        font-size: 16px;
        padding: 7px 10px 5px 10px;
        border: 1px solid #ccc;
    }

    .clickable {
        background-color: #fff;
        color: #000;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background-color: #06fe06;
        }
        &:active {
            transform: scale(0.9, 0.9);
        }
    }
`

const DepartmentList = () => {
    const {keyword} = useQueryString();

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.DepartmentSlice);

    React.useEffect(() => {
        dispatch(getList({
            keyword: keyword,
        }));
    }, [keyword]);

    const navigate = useNavigate();

    const onSearchSubmit = useCallback((e)=> {
        e.preventDefault();

        const current = e.currentTarget;
        const keyword = current.keyword;

        let redirectUrl = keyword.value ? `/?keyword=${keyword.value}` : '/';
        navigate(redirectUrl);
    }, [navigate])

    return (
        <div>
            <Spinner loading={loading}/>
            <ControlContainer onSubmit={onSearchSubmit}>
                <input type="text" name="keyword" classname="controll"/>
                <button type="submit" className="controll clickable">검색</button>
                <NavLink to="department_add" className="controll clickable">학과정보 추가하기</NavLink>
            </ControlContainer>
            {error? (
                <ErrorView error={error}/>
            ) : (
                data && (
                    <Table>
                        <thead>
                            <tr>
                                <th>학과번호</th>
                                <th>학과명</th>
                                <th>학과위치</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.length > 0 ? (
                                    data.map((v,i) => {
                                        return(
                                            <tr key={v.id}>
                                                <td>{v.id}</td>
                                                <td>{v.dname}</td>
                                                <td>{v.loc}</td>
                                                <td>
                                                    <button type='button'>
                                                        수정하기
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type='button'>
                                                        삭제하기
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan='5' align='center'>
                                            검색결과가 없습니다.
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                )
            )}
        </div>
    )
}

export default DepartmentList;