import React from 'react';

import { useParams } from 'react-router-dom';

const DepartmentPath = () => {
    console.clear();

    const params = useParams();
    console.group("useParams()의 리턴값 확인");
    console.debug(params);
    console.groupEnd();


    console.group("파라미터 처리 결과 확인");
    console.debug('요청된 학과번호 값=%s (%s)', params.id, typeof params.id);
    console.debug('요청된 메세지 내용=%s (%s)', params.msg, typeof params.msg);
    console.groupEnd();

    const departmentList = {
        item: [
            {id: 101, dname: '컴퓨터공학과', loc: '1호관'},
            {id: 102, dname: '멀티미디어학과', loc: '2호관'}
        ]
    }

    const id= parseInt(params.id);

    const departmentItem = departmentList.item.find(v => v.id === id? true : false)
    console.log(departmentItem)

    if (!departmentItem) {
        return (<h2>존재하지 않는 데이터에 대한 요청입니다</h2>)
    }

    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과번호: {departmentItem.id}</li>
                <li>학과위치: {departmentItem.loc}</li>
            </ul>
        </div>
    )
}

export default DepartmentPath;