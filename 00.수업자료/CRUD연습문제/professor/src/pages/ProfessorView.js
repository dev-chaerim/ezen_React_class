import React, {memo, useCallback, useEffect, useMemo} from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, deleteItem, getItem } from '../slices/ProfessorSlice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';
import dayjs from 'dayjs';

const ProfessorView = memo(() => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state) => state.ProfessorSlice);

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

    const onProfessorItemDelete = useCallback((e) => {
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
                                    <th>직급</th>
                                    <td>{item.position}</td> 
                                </tr>
                                <tr>
                                    <th>급여</th>
                                    <td>{item.sal}</td> 
                                </tr>
                                <tr>
                                    <th>입사일</th>
                                    <td>{dayjs(item.hiredate).format('YYYY-MM-DD')}</td> 
                                </tr>
                                <tr>
                                    <th>보직수당</th>
                                    <td>{item.comm}</td> 
                                </tr>
                                <tr>
                                    <th>소속학과번호</th>
                                    <td>{item.deptno}</td> 
                                </tr>
                            </tbody>
                        </Table>

                        <div style={{textAlign: 'center'}}>
                            <NavLink to="/">목록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to="/professor_add">등록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to={`/professor_edit/${item.id}`}>수정</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to="#!" data-id = {item.id} data-name={item.name} onClick={onProfessorItemDelete}>삭제</NavLink>
                            
                        </div>
                    </div>     
                )
            )}
        </div>
    )
})

export default ProfessorView;