import React, { useCallback } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import {useLocation, useNavigate} from 'react-router-dom';



const Professor = () => {
  
  const [professor, setProfessor] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [updateId, setUpdateId] = React.useState(-1);

  const {search} = useLocation();
  const query = new URLSearchParams(search);
  const {keyword} = Object.fromEntries(query);
  const navigate = useNavigate();

  React.useEffect(()=>{
    (async () => {
      setLoading(true);

      let json = null;

      try {
        const response = await axios.get('/professor', {
          params: keyword ? {name: keyword} : null
        })
        json = response.data;
        console.log("@@@@@@useEffect")
      } catch(e) {
        console.error(e);
        alert('Ajax 연동실패')
      } finally {
        setLoading(false)
      }

      setProfessor(json);
    })();
  }, [keyword])

  const onSearchSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('submit');
    navigate(`/professor?keyword=${e.currentTarget.keyword.value}`)

  },[navigate])

  const onDataAddSubmit = useCallback((e)=> {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const userid = form.userid.value;
    const position = form.position.value;
    const sal = form.sal.value;
    const hiredate = form.hiredate.value;
    const comm = form.comm.value;
    const deptno = form.deptno.value;

    (async ()=> {
      setLoading(loading => true);

      let json = null;

      try {
        const response = await axios.post("/professor", {
          name: name,
          userid : userid,
          position : position,
          sal: sal,
          hiredate: hiredate,
          comm: comm,
          deptno: deptno
        })
        json = response.data;

        console.group('데이터 저장 결과')
                console.log(json)
                console.groupEnd();
      } catch(e) {
        console.error(e);
        alert(`데이터 저장에 실패했습니다. \n${e.message}`)
      } finally {
        setLoading(loading => false);
      }
      
      setProfessor(professor => professor.concat(json));
      form.reset();
    })();
  }, [])

  //데이터 수정
  const onDataEditClick = useCallback((e)=> {
    e.preventDefault();
    const current =  e.currentTarget;
    const id = parseInt(current.dataset.id);
    setUpdateId(id);
    console.log("@@@@edit click");
  }, [])

  const onDataEditSubmit = useCallback((e)=> {
    e.preventDefault();

    const current = e.target;
    const id = current.id.value;
    const name = current.name.value;
    const userid = current.userid.value;
    const position = current.position.value;
    const sal = current.sal.value;
    const hiredate = current.hiredate.value;
    const comm = current.comm.value;
    const deptno = current.deptno.value;

    console.log('@@@current id', id);

    (async ()=>{
        let json = null;
        try {
          const response = await axios.put(`/professor/${id}`,{
            name: name,
            userid : userid,
            position : position,
            sal: sal,
            hiredate: hiredate,
            comm: comm,
            deptno: deptno
          })
          json = response.data;
    
          console.group('데이터 수정 결과')
          console.log(json)
          console.groupEnd();
        } catch(e) {
            console.error(e);
            alert(`데이터 수정에 실패했습니다. \n${e.message}`)
        } finally {
            setLoading(loading => false)
        }
      
        setProfessor((professor) => {
          const editId = professor.findIndex((v, i) => v.id === json.id);
          console.log(`제거할 대상의 배열 인덱스: ${editId}`);
      
          professor.splice(editId, 1, json);
          return professor;
        })
    })();

    setUpdateId(-1);

  }, [])

  const onDataDeleteClick = useCallback((e)=> {
    e.preventDefault();
    
    const current = e.currentTarget;
    const id = parseInt(current.dataset.id);
    console.log(`삭제 대상의 id값:${id}`);

    (async ()=>{
      setLoading(true);

      try {
        await axios.delete(`/professor/${id}`)
        
    } catch(e) {
        console.error(e);
        alert(`데이터 삭제에 실패했습니다. \n${e.message}`)
        return;
    } finally {
        setLoading(loading => false)
    }

    setProfessor((professor) => {
      const dropId = professor.findIndex((v,i) => {
        return v.id === id;
      })
      console.log(`제거할 대상의 배열 인덱스 ${dropId}`);
      professor.splice(dropId, 1);

      return professor;
    })
    })();

  }, [])

  return (
    <div>
      <Spinner loading={loading}/>
      {/* 데이터 추가 */}
      <form onSubmit={onDataAddSubmit}>
        <div>
          <label htmlFor='name'>name :</label>
          <input type='text' name='name' id='name'/>
        </div>
        <div>
          <label htmlFor='userid'>userid :</label>
          <input type='text' name='userid' id='userid'/>
        </div>
        <div>
          <label htmlFor='position'>position :</label>
          <input type='text' name='position' id='position'/>
        </div>
        <div>
          <label htmlFor='sal'>sal :</label>
          <input type='text' name='sal' id='sal'/>
        </div>
        <div>
          <label htmlFor='hiredate'>hiredate :</label>
          <input type='text' name='hiredate' id='hiredate'/>
        </div>
        <div>
          <label htmlFor='comm'>comm :</label>
          <input type='text' name='comm' id='comm'/>
        </div>
        <div>
          <label htmlFor='deptno'>deptno :</label>
          <input type='text' name='deptno' id='deptno'/>
        </div>
        <button type='submit'>저장하기</button>
      </form>
      <hr/>
      {/* 데이터 검색 */}
      <form onSubmit={onSearchSubmit}>
          <input type='text' name='keyword'/>
          <button type='submit'>검색</button>
      </form>
      <hr/>

      <form onSubmit={onDataEditSubmit}>
        <table border='1'>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>userid</th>
              <th>position</th>
              <th>sal</th>
              <th>hiredate</th>
              <th>comm</th>
              <th>deptno</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {!professor.length ? (
              <tr>
                <td colSpan='10' align='center'>검색결과가 없습니다.</td>
              </tr>
            ) : (
              professor.map((item, index) => {
                if(item.id === updateId) {
                  return (
                    <tr key ={item.id}>
                      <input type='hidden' name='id' defaultValue={item.id}/>
                      <td>{item.id}</td>
                      <td><input type='text' name='name' defaultValue={item.name}/></td>
                      <td><input type='text' name='userid' defaultValue={item.userid}/></td>
                      <td><input type='text' name='position' defaultValue={item.position}/></td>
                      <td><input type='text' name='sal' defaultValue={item.sal}/></td>
                      <td><input type='text' name='hiredate' defaultValue={item.hiredate}/></td>
                      <td><input type='text' name='comm' defaultValue={item.comm}/></td>
                      <td><input type='text' name='deptno' defaultValue={item.deptno}/></td>
                      <td colSpan='2'>
                        <button type="submit">수정사항 저장</button>
                      </td>
                    </tr>
                  )
                } else {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.userid}</td>
                      <td>{item.position}</td>
                      <td>{item.sal}</td>
                      <td>{item.hiredate}</td>
                      <td>{item.comm}</td>
                      <td>{item.deptno}</td>
                      <td><button type="button" data-id={item.id} onClick={onDataEditClick}>수정하기</button></td>
                      <td><button type="button" data-id={item.id} onClick={onDataDeleteClick}>삭제하기</button></td>
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

export default Professor;