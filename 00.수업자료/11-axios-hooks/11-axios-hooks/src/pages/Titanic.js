import React from "react";
import styled from 'styled-components';
import Spinner from '../components/Spinner';
import Table from "../components/Table";

import useAxios from 'axios-hooks';

const ColorText = styled.span`
  &:before {
    color: ${({sex})=> sex === 'male' ? '#06f' : '#c0c'};
    content: '${({sex})=> sex === 'male' ? '남자' : '여자'}';
    font-weight: 600;
  }
`

const EmbarkedBox = styled.span`
  &:before {
    color: ${({embarked})=> embarked === 'C' ? '#f60' : (embarked === 'Q' ? '#00f' : '#990')};
    content: '${({embarked})=> embarked === 'C' ? '셰르부르' : (embarked === 'Q' ? '퀸즈타운' : '사우샘프턴')}';
    font-weight: 600;
  }
`

const SurvivedBox = styled.span`
  &:before {
    background-color: ${({survived}) => survived ? '#090' : '#e00'};
    content: '${({survived}) => survived ? '생존' : '사망'}';
    color: #fff;
    font-weight: 600;
  }
`


const Titanic = () => {
  
  const [{ data, loading, error}, refetch] = useAxios('/titanic')

  if(error) {
    console.error(error);
    return (
      <div>
        <h1>Oops~~!!! {error.code}</h1>
        <hr/>
        <p>{error.message}</p>
      </div>
    )
  }

  return(
    <div>
      <Spinner loading={loading}/>
      <Table>
        <thead>
          <tr>
            <th>승객번호</th>
            <th>승객이름</th>
            <th>성별</th>
            <th>나이</th>
            <th>동승자 수</th>
            <th>객실등급</th>
            <th>방 호수</th>
            <th>티켓번호</th>
            <th>요금</th>
            <th>탑승지</th>
            <th>생존여부</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(({id, name, survived, pclass, sex, age, sibsp, parch, ticket, fare, cabin, embarked}, i) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td><ColorText sex={sex}/></td>
                <td>{age}</td>
                <td>{sibsp + parch}</td>
                <td>{pclass}</td>
                <td>{cabin}</td>
                <td>{ticket}</td>
                <td>{fare}</td>
                <td><EmbarkedBox embarked={embarked}/></td>
                <td><SurvivedBox survived={survived}/></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default React.memo(Titanic);