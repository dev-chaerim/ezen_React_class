import React, {memo, useCallback, useEffect, useMemo} from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, deleteItem, getItem } from '../slices/StudentSlice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';
import dayjs from 'dayjs';

const StudentView = memo(() => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state) => state.StudentSlice);

    useEffect(()=>{
        dispatch(getCurrentData());
    }, [])

    
    const item = useMemo(() => {
        if(data) {
            return data.find((v,i)=> v.id == id);
        } else {
            dispatch(getItem({id: id}));
        }
    }, [data]);

    const navigate = useNavigate();

    const onStudentItemDelete = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id, name} = current.dataset;

        if(window.confirm(`정말 ${name}(을)를 삭제하시겠습니까?`)) {
            dispatch(deleteItem({
                id: id
            })).then(({meta, payload}) => {
                navigate('/');
            })
        }
    }, []);

    
    return(
        <div>
            <Spinner loading={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ) : (
                item && (
                    <div>
                        <Table>
                            <colgroup>
                                <col width="120"/>
                                <col/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>No.</th>
                                    <td>{item.id}</td> 
                                </tr>
                                <tr>
                                    <th>이름</th>
                                    <td>{item.name}</td> 
                                </tr>
                                <tr>
                                    <th>아이디</th>
                                    <td>{item.userid}</td> 
                                </tr>
                                <tr>
                                    <th>학년</th>
                                    <td>{item.grade}</td> 
                                </tr>
                                <tr>
                                    <th>학생번호</th>
                                    <td>{item.idnum}</td> 
                                </tr>
                                <tr>
                                    <th>생년월일</th>
                                    <td>{dayjs(item.birthdate).format('YYYY-MM-DD')}</td> 
                                </tr>
                                <tr>
                                    <th>키</th>
                                    <td>{item.height}</td> 
                                </tr>
                                <tr>
                                    <th>무게</th>
                                    <td>{item.weight}</td> 
                                </tr>
                                <tr>
                                    <th>학과번호</th>
                                    <td>{item.deptno}</td> 
                                </tr>
                                <tr>
                                    <th>담당교수번호</th>
                                    <td>{item.profno}</td> 
                                </tr>
                            </tbody>
                        </Table>

                        <div style={{textAlign: 'center'}}>
                            <NavLink to="/">목록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to="/student_add">등록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to={`/student_edit/${item.id}`}>수정</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to="#!" data-id = {item.id} data-name={item.name} onClick={onStudentItemDelete}>삭제</NavLink>
                            
                        </div>
                    </div>     
                )
            )}
        </div>
    )
})

export default StudentView;