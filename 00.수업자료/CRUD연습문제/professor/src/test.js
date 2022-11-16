import React, {memo, useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getList, getItem, postItem, putItem, deleteItem } from './slices/ProfessorSlice';

const Test = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.ProfessorSlice);

    useEffect(()=>{
        dispatch(getList());
        // dispatch(getItem({id:203}));
        // dispatch(postItem({name: 'React.js3', userid: 'test3'}));
        // dispatch(putItem({id: 9915, name: 'React.js 수정', userid: 'test 수정'}));
        dispatch(deleteItem({id:9909}));
    }, [dispatch])
    return(
        loading ? "loading..." : (
            error ? JSON.stringify(error) : (
                <>
                    {JSON.stringify(data)}
                </>
            )
        )
    )
})

export default Test;