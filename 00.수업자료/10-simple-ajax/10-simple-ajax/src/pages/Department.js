import React, { useCallback } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import {useLocation, useNavigate} from 'react-router-dom';


const Department = () => {

    const [department, setDepartment] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const {keyword} = Object.fromEntries(query);

    const navigate = useNavigate();
    
   
    //페이지가 처음 열렸을 때 실행할 hook
    React.useEffect(()=> {
        (async ()=> {

            setLoading(true);

            let json = null;

            try {
                const response = await axios.get('/department', {
                    params: keyword ? {dname: keyword} : null
                })
                json = response.data;
            }catch(e) {
                console.error(e);
                alert('Ajax 연동실패')
            } finally {
                setLoading(false);
            }
            
            setDepartment(json);
            
        })();
    }, [keyword])

    //검색폼에서의 전송 이벤트
    const onSearchSubmit = useCallback((e) => {
        e.preventDefault();
        console.log("submit~");
        navigate(`/department?keyword=${e.currentTarget.keyword.value}`)
    }, [navigate])
        
     //데이터 추가 이벤트
     const onDataAddSubmit = useCallback((e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const dname = form.dname.value;
        const loc = form.loc.value;

        (async ()=> {
            setLoading(loading => true);

            let json = null;

            try {
                const response = await axios.post("department",{
                    dname: dname,
                    loc: loc
                })
                json = response.data;

                console.groupEnd('데이터 저장 결과')
                console.log(json)
                console.groupEnd();
            } catch(e) {
                console.error(e);
                alert(`데이터 저장에 실패했습니다. \n${e.message}`)
            } finally {
                setLoading(loading => false)
            }

            setDepartment(department => department.concat(json))

            form.reset();
        })();
    }, [])

    //데이터 삭제 이벤트
    const onDataDeleteClick =useCallback((e)=> {
        const current = e.currentTarget;
        const id = parseInt(current.dataset.id);
        console.log(`삭제 대상의 id값: ${id}`);

        (async ()=> {
            setLoading(loading => true);
            
            try {
                await axios.delete(`/department/${id}`)
                
            } catch(e) {
                console.error(e);
                alert(`데이터 삭제에 실패했습니다. \n${e.message}`)
                return;
            } finally {
                setLoading(loading => false)
            }

            setDepartment(department => {
                // console.log("department: " + department)
                const dropId = department.findIndex((v, i)=> {
                    return v.id === id;
                })
                console.log(`제거할 대상의 배열 인덱스 ${dropId}`)
                department.splice(dropId, 1);
                
                return department;
            })

        })();
    }, [])
    
    return (
        <div>
            <Spinner loading={loading} />
            {/* 저장하기 */}
            <form onSubmit={onDataAddSubmit}>
                <div>
                <label htmlFor="dname">학과 :</label>
                <input type="text" name='dname' id='dname' />
                </div>
                <div>
                <label htmlFor="loc">위치 :</label>
                <input type="text" name='loc' id='loc'/>
                </div>
                <button type='submit'>저장하기</button>
            </form>
            <hr/>
            {/* 검색하기 */}
            <form onSubmit={onSearchSubmit}>
                <input type="text" name='keyword' />
                <button type='submit'>검색</button>
            </form>
            <hr />
            <table border='1'>
                <thead>
                    <tr>
                        <th>학과번호</th>
                        <th>학과명</th>
                        <th>학과위치</th>
                        <th>삭제</th>
                    </tr>  
                </thead>
                <tbody>
                    {!department.length ? (
                        <tr>
                            <td colSpan='4' align='center'>
                                검색결과가 없습니다.
                            </td>
                        </tr>
                    ) : (
                        department.map((item, index)=> {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.dname}</td>
                                    <td>{item.loc}</td>
                                    <td>
                                        <button type="button" data-id={item.id} onClick={onDataDeleteClick}>삭제하기</button>
                                    </td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Department;