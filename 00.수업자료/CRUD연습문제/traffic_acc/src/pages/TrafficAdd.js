import React, {memo, useCallback} from 'react';
import TableEx from '../components/TableEx';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postItem } from '../slices/TrafficSlice';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';


const TrafficAdd = memo(() => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { loading, error} = useSelector((state) => state.TrafficSlice);

    const onTrafficSubmit = useCallback((e)=>{
        e.preventDefault();

        const current = e.currentTarget;

        dispatch(postItem({
            year: current.year.value,
            month: current.month.value,
            accident: current.accident.value,
            death: current.death.value,
            injury: current.injury.value,
        })).then((result) => {
            console.log("result:",result);
            navigate(`/traffic_view/${result.payload.id}`);
        })
    }, [])

    return(
        <div>
            <Spinner loading={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ) : (
            <form onSubmit={onTrafficSubmit}>
                <TableEx>
                    <colgroup>
                        <col width="120"/>
                        <col/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>년도</th>
                            <td className='inputWrapper'>
                                <input className="field" type="text" name="year"/>
                            </td>
                        </tr>
                        <tr>
                            <th>월</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="month"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>교통사고 건수</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="accident"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>사망자 수</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="death"/>
                            </td> 
                        </tr>
                        <tr>
                            <th>부상자 수</th>
                                <td className='inputWrapper'>
                                <input className="field" type="text" name="injury"/>
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

export default TrafficAdd;