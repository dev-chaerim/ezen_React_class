import React, {memo, useCallback, useEffect, useMemo} from 'react';
import TableEx from '../components/TableEx';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, getItem, putItem } from '../slices/StudentSlice';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import dayjs from 'dayjs';

const StudentEdit = memo(() => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state) => state.StudentSlice);

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

    const onStudentSubmit = useCallback((e)=>{
        e.preventDefault();

        const current = e.currentTarget;
        console.log(current.name.value);
        dispatch(putItem({
            id: current.id.value,
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
    },[])

    return(
        <div>
            <Spinner loading={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ) : (
            <form onSubmit={onStudentSubmit}>
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
                            <th>학년</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="grade" defaultValue={item?.grade}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>학생번호</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="idnum" defaultValue={item?.idnum}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>생년월일</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="birthdate" defaultValue={dayjs(item?.birthdate).format('YYYY-MM-DD')}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>연락처</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="tel" defaultValue={item?.tel}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>키</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="height" defaultValue={item?.height}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>무게</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="weight" defaultValue={item?.weight}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>학과번호</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="deptno" defaultValue={item?.deptno}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>담당교수번호</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="profno" defaultValue={item?.profno}/>
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

export default StudentEdit;