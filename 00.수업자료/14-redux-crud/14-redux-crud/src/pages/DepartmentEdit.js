import React, {memo, useCallback, useEffect, useMemo} from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, putItem, getItem } from '../slices/DepartmentSlice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import TableEx from '../components/TableEx';


const DepartmentEdit = memo(() => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.DepartmentSlice);

    useEffect(()=>{
        dispatch(getCurrentData());
    }, [])
    
    const item = useMemo((v, i)=>{
        if(data) {
            return data.find((v, i) => v.id == id);
        } else {
            dispatch(getItem({id: id}));
        }
    },[data])

    const navigate = useNavigate();
    const onDepartmentSubmit = useCallback((e)=>{
        e.preventDefault();
        const current = e.currentTarget;
        dispatch(putItem({
            id: current.id.value,
            dname: current.dname.value,
            loc: current.loc.value
        })).then((result) => {
            console.log(result);
            navigate(`/department_view/${result.payload.id}`)
        })
    },[])
    return (
        <div>
            <Spinner loading={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ) : (
                <form onSubmit={onDepartmentSubmit}>
                    <input type="hidden" name='id' defaultValue={item?.id}/>
                    <TableEx>
                        <colgroup>
                            <col width='120'/>
                            <col/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>학과이름</th>
                                <td className="inputWrapper">
                                    <input className='field' type="text" name='dname' defaultValue={item?.dname}/>
                                </td>
                            </tr>
                            <tr>
                                <th>학과위치</th>
                                <td className="inputWrapper">
                                    <input className='field' type="text" name='loc' defaultValue={item?.loc}/>
                                </td>
                            </tr>
                        </tbody>
                    </TableEx>

                    <div style={{textAlign: 'center'}}>
                        <button type='submit'>저장하기</button>
                    </div>
                </form>

            )}
        </div>
    )
})

export default DepartmentEdit;