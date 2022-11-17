import React, {memo, useCallback, useEffect, useMemo} from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, deleteItem, getItem } from '../slices/TrafficSlice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';
import dayjs from 'dayjs';

const TrafficView = memo(() => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state) => state.TrafficSlice);

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

    const onTrafficItemDelete = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id } = current.dataset;

        if(window.confirm(`정말 ${id}번(을)를 삭제하시겠습니까?`)) {
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
                                    <th>년도</th>
                                    <td>{item.year}</td> 
                                </tr>
                                <tr>
                                    <th>월</th>
                                    <td>{item.month}</td> 
                                </tr>
                                <tr>
                                    <th>교통사고 건수</th>
                                    <td>{item.accident}</td> 
                                </tr>
                                <tr>
                                    <th>사망자 수</th>
                                    <td>{item.death}</td> 
                                </tr>
                                <tr>
                                    <th>부상자 수</th>
                                    <td>{item.injury}</td> 
                                </tr>
                                
                            </tbody>
                        </Table>

                        <div style={{textAlign: 'center'}}>
                            <NavLink to="/">목록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to="/traffic_add">등록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to={`/traffic_edit/${item.id}`}>수정</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to="#!" data-id = {item.id} data-name={item.name} onClick={onTrafficItemDelete}>삭제</NavLink>
                            
                        </div>
                    </div>     
                )
            )}
        </div>
    )
})

export default TrafficView;