import React, {memo} from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import Table from '../components/Table';
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';

const TableEx = styled(Table)`
    margin-top: 50px;
    margin-bottom: 15px;

    .inputWrapper {
        padding: 0;
        position: relative;
        text-align: left;

        .field {
            box-sizing: border-box;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: 0;
            padding: 0 10px;
            outline: none;
            font-size: 14px;
        }

        label {
            margin-left: 7px;
            margin-right: 10px;

            input {
                margin-right: 10px;
            }
        }
    }
`;

const ProfEdit = memo(() => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [{data, loading, error}, getDept] = useAxios("/department")

    const [{data: data2, loading:loading2, error: error2}, refetch] = useAxios(`/professor/${id}`, {
        useCache: false
    });

    const onSubmit = React.useCallback((e) => {
        e.preventDefault();

        const current = e.target;

        const name = current.name.value;
        const userid = current.userid.value;
        const position = current.position.value;
        const sal = current.sal.value;
        const hiredate = current.hiredate.value;
        const comm = current.comm.value;
        const deptno = current.deptno.value;
        
        let json = null;

        (async ()=>{
            try {
                const response = await refetch({
                    method: 'PUT',
                    data: {
                        name: name,
                        userid: userid,
                        position: position,
                        sal: parseInt(sal),
                        hiredate: hiredate,
                        comm: parseInt(comm),
                        deptno: deptno
                    }   
                })
                json = response.data;
            } catch(e) {
                console.error(e);
                window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
            }

            if( json !== null) {
                window.alert("수정되었습니다.");
                navigate('/');
            }
        })();
    },[refetch, navigate])
    
    return (
       <>
       <Spinner loading={loading || loading2}/>
       {error2 || error ? (
            <div>
            <h1>Oops~!!! {error.code} Error.</h1>
            </div>
           
       ): (data2 && (
            <form onSubmit={onSubmit}>
                    <TableEx>
                        <colgroup>
                            <col width="120"></col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>이름</th>
                                <td className='inputWrapper'><input className='field' type="text" name="name" defaultValue={data2.name} /></td>
                            </tr>
                            <tr>
                                <th>아이디</th>
                                <td className='inputWrapper'><input className='field' type="text" name="userid" defaultValue={data2.userid} /></td>
                            </tr>
                            <tr>
                                <th>직급</th>
                                <td className='inputWrapper'>
                                    <label><input type="radio" name="position" value="교수" defaultChecked={data2.position === '교수'}/>교수</label>
                                    <label><input type="radio" name="position" value="부교수" defaultChecked={data2.position === '부교수'}/>부교수</label>
                                    <label><input type="radio" name="position" value="조교수" defaultChecked={data2.position === '조교수'}/>조교수</label>
                                    <label><input type="radio" name="position" value="전임강사" defaultChecked={data2.position === '전임강사'}/>전임강사</label>
                                </td>
                            </tr>
                            <tr>
                                <th>급여(만원)</th>
                                <td className='inputWrapper'>
                                    <input className='field' type="number" name="sal" placeholder='숫자만 입력' defaultValue={data2.sal}/>
                                </td>
                            </tr>
                            <tr>
                                <th>입사일</th>
                                <td className='inputWrapper'>
                                    <input className='field' type="date" name="hiredate" defaultValue={data2.hiredate}/>
                                </td>
                            </tr>
                            <tr>
                                <th>보직수당(만원)</th>
                                <td className='inputWrapper'>
                                    <input className='field' type="number" name="comm" placeholder='숫자만 입력' defaultValue={data2.comm}/>
                                </td>
                            </tr>
                            <tr>
                                <th>소속학과</th>
                                <td className='inputWrapper'>
                                    <select name="deptno" className="field" defaultValue={data2.deptno}>
                                        <option value="">----선택하세요----</option>
                                        {data && data.map(({id, dname}, i)=>{
                                            return(
                                                <option key={id} value={id}>{dname}</option>
                                            )
                                        })}

                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </TableEx>
                    <div style={{textAlign:'center'}}>
                        <button type='submit'>저장하기</button>
                    </div>
            </form>
       )
       )}
       
       </>
    )
})

export default ProfEdit;