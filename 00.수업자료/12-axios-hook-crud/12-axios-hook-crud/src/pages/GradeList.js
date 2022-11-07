import React, {useEffect, useState} from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Table from '../components/Table';

const LinkContainer = styled.div`
    position: sticky;
    top:0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
`

const TopLink = styled(NavLink)`
    margin-right: 15px;
    display: inline-block;
    font-size: 16px;
    padding: 7px 10px 5px 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #000;
    text-decoration: none;

    &:hover {
        background-color: #06f2;
    }
`

const GradeList = () => {
    const [grade, setGrade] = useState([])
    const [{data, loading: loading1, error}, refetch] = useAxios("/grade", {
        //쓰기, 수정 페이지에 방문하여 데이터가 변경되더라도 다시 목록페이지로 돌아오면
        //Axios는 캐시된 json을 활용하기 때문에 데이터의 변경사항이 화면에 반영되지 않는다.
        //이를 방지하기 위해 캐시를 사용하지 않도록 옵션으로 명시해야 한다.
        useCache: false
    });

    const [{ loading: loading2}, sendDelete] = useAxios({
        method: 'DELETE'
    }, {
        useCache: false,
        manual: true
    })

    useEffect(() => {
        setGrade(data);
    },[data]);

    const onDeleteClick = (e) => {
        e.preventDefault();

        const current = e.target;

        const id = parseInt(current.dataset.id);
        const name = current.dataset.name;

        if(window.confirm(`정말 ${name}학생의 성적을 삭제하시겠습니까?`)) {
            (async ()=> {

                try {
                    await sendDelete({url: `/grade/${id}`});
                } catch(e) {
                    console.error(e);
                    window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
                }
                
                setGrade(currentData => {
                    const findIndex = currentData.findIndex((v, i)=> v.id === id);
                    currentData.splice(findIndex, 1);
                    return currentData;
                })
                
            })();
        }
    }

    return (
        <div>
            <Spinner loading={loading1 || loading2}/>

            <LinkContainer>
                <TopLink to="add">성적 추가하기</TopLink>
            </LinkContainer>

            { error ? (
                <div>
                    <h1>Oops~!!! {error.code} Error.</h1>
                    <hr/>
                    <p>{error.message}</p>
                </div>
            ) :(
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan="2">No.</th>
                            <th rowSpan="2">이름</th>
                            <th rowSpan="2">학년</th>
                            <th rowSpan="2">성별</th>
                            <th colSpan="4">과목별 점수</th>
                            <th colSpan="2">집계</th>
                            <th colSpan="2" rowSpan="2">수정/삭제</th>
                        </tr>
                        <tr>
                            <th>국어</th>
                            <th>영어</th>
                            <th>수학</th>
                            <th>과학</th>
                            <th>총점</th>
                            <th>평균</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(({id, name, level, sex, kor, eng, math, sin}, i)=>{
                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{level}</td>
                                    <td>{sex}</td>
                                    <td>{kor}</td>
                                    <td>{eng}</td>
                                    <td>{math}</td>
                                    <td>{sin}</td>
                                    <td>{kor + eng + math + sin}</td>
                                    <td>{(kor + eng + math + sin)/4}</td>
                                    <td>
                                        <NavLink to={`edit/${id}`}>수정하기</NavLink>
                                    </td>
                                    <td>
                                        <a href="#!" data-id={id} data-name={name} onClick={onDeleteClick}>삭제하기</a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default GradeList;