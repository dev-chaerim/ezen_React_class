import React, {memo, useCallback} from 'react';
import TableEx from '../components/TableEx';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postItem } from '../slices/StudentSlice';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';


const StudentAdd = memo(() => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { loading, error} = useSelector((state) => state.StudentSlice);

    const onStudentSubmit = useCallback((e)=>{
        e.preventDefault();

        const current = e.currentTarget;

        dispatch(postItem({
            name: current.name.value,
            userid: current.userid.value,
            grade: current.grade.value,
            idnum: current.idnum.value,
            birthdate: current.birthdate.value,
            tel: current.tel.value,
            height: current.height.value,
            weight: current.weight.value,
            deptno: current.deptno.value,
            profno: current.profno.value,
        })).then((result) => {
            console.log("result:",result);
            navigate(`/student_view/${result.payload.id}`);
        })
    }, [])

    return(
        <div>
            <Spinner loading={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ) : (
            <form onSubmit={onStudentSubmit}>
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
                            <th>학년</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="grade"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>학생번호</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="idnum"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>생년월일</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="birthdate"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>연락처</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="tel"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>키</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="height"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>무게</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="weight"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>학과번호</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="deptno"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>담당교수번호</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="profno"/>
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

export default StudentAdd;