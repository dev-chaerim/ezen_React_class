import React, {memo, useCallback} from 'react';
import TableEx from '../components/TableEx';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postItem } from '../slices/DepartmentSlice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';


const DepartmentAdd = memo(() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error} = useSelector((state) => state.DepartmentSlice);

    const onDepartmentSubmit = useCallback((e)=>{
        e.preventDefault();
        const current = e.currentTarget;

        dispatch(postItem({
            dname: current.dname.value,
            loc: current.loc.value
        })).then((result)=>{
            console.log("result:", result)

            navigate(`/department_view/${result.payload.id}`);
        })
    })

    return (
        <div>
            <Spinner loading={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ) : (
                <form onSubmit={onDepartmentSubmit}>
                    <TableEx>
                        <colgroup>
                            <col width="120"/>
                            <col/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>학과이름</th>
                                <td className='inputWrapper'>
                                    <input className="field" type="text" name="dname"/>
                                </td>
                            </tr>
                            <tr>
                                <th>학과위치</th>
                                    <td className='inputWrapper'>
                                    <input className="field" type="text" name="loc"/>
                                </td> 
                            </tr>
                        </tbody>
                    </TableEx>
                    <div style={{textAlign:'center'}}>
                        <button type='submit'>저장하기</button>
                    </div>
                 </form>
            )}
           
        </div>
    )
})

export default DepartmentAdd;