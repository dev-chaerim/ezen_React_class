import React from 'react';
import Meta from '../Meta';
import GradeData from '../GradeData';
import GradeItem from '../components/GradeItem';

const GradeTable = () => {
    return (
        <div>
            <Meta title="성적표(Demo)" description = "성적표 구현 예제" />

            <h2>성적표</h2>
            <table border="1" cellPadding="7">
                <thead>
                    <tr align="center">
                        <th>이름</th>
                        <th>학년</th>
                        <th>성별</th>
                        <th>국어</th>
                        <th>영어</th>
                        <th>수학</th>
                        <th>과학</th>
                        <th>총점</th>
                        <th>평균</th>
                    </tr>
                </thead>
                <tbody>
                    {GradeData.map((v, i) => {
                        return (
                            <GradeItem  
                                key={i}
                                name={v.이름}
                                level = {v.학년}
                                sex = {v.성별}
                                kor = {v.국어}
                                eng = {v.영어}
                                math = {v.수학}
                                sinc = {v.과학}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default GradeTable;