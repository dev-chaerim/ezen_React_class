import React, {memo, useCallback, useEffect, useMemo} from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, deleteItem, getItem } from '../slices/DepartmentSlice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

const DepartmentView = memo(() => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state)=>state.DepartmentSlice);

    useEffect(()=>{
        dispatch(getCurrentData());
    },[])

    const item = useMemo(()=> {
        if(data) {
            return data.find((v, i) => v.id == id);
        } else {
            dispatch(getItem({id:id}))
        }
    }, [data])

    const navigate = useNavigate();

    const onDepartmentItemDelete = useCallback((e)=> {
        e.preventDefault();

        const current = e.currentTarget;
        const {id, dname} = current.dataset;

        if(window.confirm(`정말 ${dname}(을)를 삭제하시겠습니까?`)){
            dispatch(deleteItem({
                id: id
            })).then(({meta, payload}) => {
                navigate('/')
            })
        }
    }, [])

    return (
        <div>
            <Spinner loading={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ) : (
                item && (
                    <div>
                        <Table>
                            <colgroup>
                                <col width='120'/>
                                <col/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>학과번호</th>
                                    <td>{item.id}</td>
                                </tr>
                                <tr>
                                    <th>학과이름</th>
                                    <td>{item.dname}</td>
                                </tr>
                                <tr>
                                    <th>학과위치</th>
                                    <td>{item.loc}</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div style={{textAlign:'center'}}>
                            <NavLink to='/'>목록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to='/department_add'>등록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to={`/department_edit/${item.id}`}>수정</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to='#!' data-id={item.id} data-dname={item.dname} onClick={onDepartmentItemDelete}>삭제</NavLink>
                            
                        </div>
                    </div>
                )
            )}
        </div>
    )
})

export default DepartmentView;