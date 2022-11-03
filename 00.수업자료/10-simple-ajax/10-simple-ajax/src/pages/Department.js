import React, { useCallback } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import {useLocation, useNavigate} from 'react-router-dom';


const Department = () => {

    const [department, setDepartment] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [updateId, setUpdateId] = React.useState(-1);

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

                console.group('데이터 저장 결과')
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

            setDepartment((department) => {
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

    //데이터 수정 클릭 이벤트
    const onDataEditClick = useCallback((e) => {
        e.preventDefault();
        const current = e.currentTarget;
        const id = parseInt(current.dataset.id);
        setUpdateId(id);
        
    }, [])

    //수정한 데이터 전송 이벤트
    const onDataEditSubmit = useCallback((e) => {
        e.preventDefault();

        const current = e.target;

        const id = current.id.value;
        const dname = current.dname.value;
        const loc = current.loc.value;

        (async ()=> {
            setLoading(true);

            let json = null;

            try {
                const response = await axios.put(`/department/${id}`,{
                    dname: dname,
                    loc: loc
                })
                json = response.data;

                console.group('데이터 수정 결과')
                console.log(json)
                console.groupEnd();
            } catch(e) {
                console.error(e);
                alert(`데이터 수정에 실패했습니다. \n${e.message}`)
            } finally {
                setLoading(false)
            }

            setDepartment((department) => {
                
                const editId = department.findIndex((v, i) => v.id === json.id);
                console.log(`제거할 대상의 배열 인덱스: ${editId}`);

                department.splice(editId, 1, json);

                return department;
            });
        })();
        setUpdateId(-1);

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
            <form onSubmit ={onDataEditSubmit}>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>학과번호</th>
                            <th>학과명</th>
                            <th>학과위치</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>  
                    </thead>
                    <tbody>
                        {!department.length ? (
                            <tr>
                                <td colSpan='5' align='center'>
                                    검색결과가 없습니다.
                                </td>
                            </tr>
                        ) : (
                            department.map((item, index)=> {
                                if(item.id === updateId) {
                                    return (
                                        <tr key={item.id}>
                                            <input type='hidden' name='id' defaultValue={item.id}/>
                                            <td>{item.id}</td>
                                            <td><input type="text" name='dname' defaultValue={item.dname} /></td>
                                            <td><input type="text" name='loc' defaultValue={item.loc} /></td>
                                            <td colSpan="2">
                                                <button type='submit'>수정사항 저장</button>
                                            </td>
                                    
                                        </tr>
                                    )
                                } else {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.dname}</td>
                                            <td>{item.loc}</td>
                                            <td>
                                                <button type="button" data-id={item.id} onClick={onDataEditClick}>수정하기</button>
                                            </td>
                                            <td>
                                                <button type="button" data-id={item.id} onClick={onDataDeleteClick}>삭제하기</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        )}
                    </tbody>
                </table>
            </form>
            
        </div>
    )
}

export default Department;