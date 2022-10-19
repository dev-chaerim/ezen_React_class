import React from 'react';
import Data from '../Data';

const Department = () => {
    return (
        <div>
            <h2>학과목록</h2>
            <table border="1" cellPadding="7">
                <thead>
                    <tr align="center">
                        <th>학과번호</th>
                        <th>학과이름</th>
                        <th>위치</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.department.map((v, i) => {
                        return (
                            <tr align="center" key={i}>
                                <td>{v.id}</td>
                                <td>{v.dname}</td>
                                <td>{v.loc}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default Department;