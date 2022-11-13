import React, {memo, useState, useEffect, useCallback, useMemo} from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { getMovieRank } from '../slices/MovieRankSlice';

import Spinner from '../components/Spinner';
import Table from '../components/Table';
import ErrorView from '../components/ErrorView';
import BarChartView from '../components/BarChartView';

import dayjs from 'dayjs';
import mq from  '../MediaQuery';

const Container = styled.div`
    ${mq.minWidth('md')`
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        .flex-item {
            width: 50%;
            box-sizing: border-box;
            padding: 10px;
        }
    `}
`

const MovieRank = memo(() => {
    const {data, loading, error} = useSelector((state) => state.MovieRankSlice);

    const dispatch = useDispatch();
    
    const [targetDt, setTargetDt] = useState(dayjs().add(-1, 'd').format('YYYY-MM-DD'));

    useEffect(() => {
        dispatch(getMovieRank({
            targetDt: targetDt.replaceAll("-", "")
        }))
    }, [dispatch, targetDt]);

    const onDateChange = useCallback((e) => {
        e.preventDefault();
        setTargetDt(e.target.value);
    }, []);

    const {movieNm, audiCnt} = useMemo(() => {
        const newData = {movieNm: [], audiCnt: []};

        if(data) {
            data.boxOfficeResult.dailyBoxOfficeList.forEach((v, i) => {
                newData.movieNm.push(v.movieNm);
                newData.audiCnt.push(v.audiCnt);
            })

            console.log(newData);
        }
        return newData;
    }, [data])
    return (
        <div>
            <Spinner loading={loading}/>
            <form>
                <input type="date" className='form-control' placeholder='날짜 선택' value={targetDt} onChange={onDateChange}/>
            </form>

            <hr/>

            {error ? <ErrorView error={error}/> : (
                <Container>
                    <div className="flex-item">
                        <BarChartView labels={movieNm} dataset={audiCnt} legend={`${targetDt}관람객 수`}/>
                    </div>
                    <div className='flex-item'>
                        <Table>
                            <thead>
                                <tr>
                                    <th>순위</th>
                                    <th>제목</th>
                                    <th>관람객 수</th>
                                    <th>매출액</th>
                                    <th>누적 관람객 수</th>
                                    <th>누적 매출액</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.boxOfficeResult.dailyBoxOfficeList.map((v, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{v.rank}</td>
                                            <td>{v.movieNm}</td>
                                            <td>{Number(v.audiCnt).toLocaleString()}명</td>
                                            <td>{Number(v.salesAmt).toLocaleString()}원</td>
                                            <td>{Number(v.audiAcc).toLocaleString()}명</td>
                                            <td>{Number(v.salesAcc).toLocaleString()}원</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            )}
        </div>
    )
})

export default MovieRank;