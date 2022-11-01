import React from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';



const Department = () => {

    const [department, setDepartment] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    
        React.useEffect(()=> {
            (async ()=> {
    
                setLoading(true);
    
                let json = null;
    
                try {
                    const response = await axios.get('/department')
                    json = response.data;
                }catch(e) {
                    console.error(e);
                    alert('Ajax 연동실패')
                } finally {
                    setLoading(false);
                }
                
                setDepartment(json);
                
            })();
        }, [])

    return (
        <div>
            <Spinner loading={loading} />

            <table border='1'>
                <thead>
                    <tr>
                        <td>학과번호</td>
                        <td>학과명</td>
                        <td>학과위치</td>
                    </tr>  
                </thead>
                <tbody>
                    {!department.length ? (
                        <tr>
                            <td colSpan='3' align='center'>
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