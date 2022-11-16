import React, {memo, useCallback, useEffect, useMemo} from 'react';
import TableEx from '../components/TableEx';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, getItem, putItem } from '../slices/ProfessorSlice';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import dayjs from 'dayjs';

const ProfessorEdit = memo(() => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state) => state.ProfessorSlice);

    useEffect(()=> {
        dispatch(getCurrentData());
    },[]);

    const item = useMemo(() => {
        if(data) {
            return data.find((v, i) => v.id == id);
        } else {
            dispatch(getItem({id:id}));
        }
    }, [data])

    const navigate = useNavigate();

    const onProfessorSubmit = useCallback((e)=>{
        e.preventDefault();

        const current = e.currentTarget;

        dispatch(putItem({
            id: current.id.value,
            name: current.name.value,
            userid: current.userid.value,
            position: current.position.value,
            sal: current.sal.value,
            hiredate: current.hiredate.value,
            comm: current.comm.value,
            deptno: current.deptno.value,
        })).then((result) => {
            console.log("result:",result);
            navigate(`/professor_view/${result.payload.id}`);
        })
    },[])

    return(
        <div>
            <Spinner loading={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ) : (
            <form onSubmit={onProfessorSubmit}>
                <input type="hidden" name="id" defaultValue={item?.id} />
                <TableEx>
                    <colgroup>
                        <col width="120"/>
                        <col/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td className='inputWrapper'>
                                <input className="field" type="text" name="name" defaultValue={item?.name}/>
                            </td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="userid" defaultValue={item?.userid}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>직급</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="position" defaultValue={item?.position}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>급여</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="sal" defaultValue={item?.sal}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>입사일</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="hiredate" defaultValue={dayjs(item?.hiredate).format('YYYY-MM-DD')}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>보직수당</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="comm" defaultValue={item?.comm}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>소속학과번호</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="deptno" defaultValue={item?.deptno}/>
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

export default ProfessorEdit;