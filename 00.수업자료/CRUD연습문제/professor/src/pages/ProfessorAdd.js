import React, {memo, useCallback} from 'react';
import TableEx from '../components/TableEx';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postItem } from '../slices/ProfessorSlice';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';


const ProfessorAdd = memo(() => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { loading, error} = useSelector((state) => state.ProfessorSlice);

    const onProfessorSubmit = useCallback((e)=>{
        e.preventDefault();

        const current = e.currentTarget;

        dispatch(postItem({
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
    }, [])

    return(
        <div>
            <Spinner loading={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ) : (
            <form onSubmit={onProfessorSubmit}>
                <TableEx>
                    <colgroup>
                        <col width="120"/>
                        <col/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td className='inputWrapper'>
                                <input className="field" type="text" name="name"/>
                            </td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="userid"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>직급</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="position"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>급여</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="sal"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>입사일</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="hiredate"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>보직수당</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="comm"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>소속학과번호</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="deptno"/>
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

export default ProfessorAdd;