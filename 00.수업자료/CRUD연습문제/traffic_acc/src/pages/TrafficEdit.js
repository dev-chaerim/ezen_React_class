import React, {memo, useCallback, useEffect, useMemo} from 'react';
import TableEx from '../components/TableEx';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, getItem, putItem } from '../slices/TrafficSlice';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import dayjs from 'dayjs';

const TrafficEdit = memo(() => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state) => state.TrafficSlice);

    useEffect(()=> {
        dispatch(getCurrentData());
    },[]);

    const item = useMemo(() => {
        if(data) {
            return data.find((v, i) => v.id == id);
        } else {
            dispatch(getItem({id:id}));
        }
    }, [data])

    const navigate = useNavigate();

    const onTrafficSubmit = useCallback((e)=>{
        e.preventDefault();

        const current = e.currentTarget;

        dispatch(putItem({
            id: current.id.value,
            year: current.year.value,
            month: current.month.value,
            accident: current.accident.value,
            death: current.death.value,
            injury: current.injury.value,
        })).then((result) => {
            console.log("result:",result);
            navigate(`/traffic_view/${result.payload.id}`);
        })
    },[])

    return(
        <div>
            <Spinner loading={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ) : (
            <form onSubmit={onTrafficSubmit}>
                <input type="hidden" name="id" defaultValue={item?.id} />
                <TableEx>
                    <colgroup>
                        <col width="120"/>
                        <col/>
                    </colgroup>
                    <tbody>
                        
                        <tr>
                            <th>년도</th>
                            <td className='inputWrapper'>
                                <input className="field" type="text" name="year" defaultValue={item?.year}/>
                            </td>
                        </tr>
                        <tr>
                            <th>월</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="month" defaultValue={item?.month}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>교통사고 건수</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="accident" defaultValue={item?.accident}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>사망자 수</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="death" defaultValue={item?.death}/>
                            </td> 
                        </tr>
                        <tr>
                            <th>부상자 수</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="injury" defaultValue={item?.injury}/>
                            </td> 
                        </tr>
                    </tbody>
                </TableEx>

                <div style={{textAlign: 'center'}}>
                    <button type='submit'>저장하기</button>
                </div>
            </form>

            )}
        </div>
    )
})

export default TrafficEdit;