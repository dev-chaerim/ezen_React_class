import React, {memo, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';
import { deleteItem, getList } from '../slices/StudentSlice';
import styled from 'styled-components';
import dayjs from 'dayjs';


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

const StudentList = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.StudentSlice);

    React.useEffect(()=>{
        dispatch(getList())
    },[]);

    const navigate = useNavigate();

    const onStudentItemDelete = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id, name} = current.dataset;

        if(window.confirm(`정말 ${name}(을)를 삭제하시겠습니까?`)) {
            dispatch(deleteItem({
                id: id
            }))
        }
    }, []);

    const onStudentEditClick = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const {id} = current.dataset;

        navigate(`/student_edit/${id}`);
    })


    return(
        <div>
            {/* 로딩바 */}
            <Spinner loading={loading}/>
            {/* 추가탭 */}
            <ControlContainer>
                <NavLink to="student_add" className="controll clickable">학생정보 추가하기</NavLink>
            </ControlContainer>
            
            {/* 조회결과 */}
            {error ? (
                <ErrorView error={error}/>
            ) : (
                data && (
                    <Table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>이름</th>
                                <th>아이디</th>
                                <th>학년</th>
                                <th>학생번호</th>
                                <th>생년월일</th>
                                <th>연락처</th>
                                <th>키</th>
                                <th>무게</th>
                                <th>학과번호</th>
                                <th>담당교수번호</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.length > 0 ? (
                                    data.map((v, i) => {
                                        return (
                                            <tr key={v.id}>
                                                <td>{v.id}</td>
                                                <td>
                                                    <NavLink to={`/student_view/${v.id}`}>{v.name}</NavLink>
                                                </td>
                                                <td>{v.userid}</td>
                                                <td>{v.grade}</td>
                                                <td>{v.idnum}</td>
                                                <td>{dayjs(v.birthdate).format('YYYY-MM-DD')}</td>
                                                <td>{v.tel}</td>
                                                <td>{v.height}</td>
                                                <td>{v.weight}</td>
                                                <td>{v.deptno}</td>
                                                <td>{v.profno}</td>
                                                <td>
                                                    <button type='button' data-id = {v.id} data-name={v.name} onClick={onStudentEditClick} >
                                                        수정하기
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type='button' data-id = {v.id} data-name={v.name} onClick={onStudentItemDelete}>
                                                        삭제하기
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ):(
                                    <tr>
                                        <td colSpan='11' align='center'>검색결과가 없습니다.</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                )
            )}
        </div>
    )
})

export default StudentList;