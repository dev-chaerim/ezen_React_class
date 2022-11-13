import React, {memo, useEffect} from 'react';
import Spinner from '../components/Spinner';
import NewsList from '../components/NewsList';

import ErrorView from '../components/ErrorView';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../slices/NewsSlice';

const News = memo(()=>{
    const {data, loading, error} = useSelector((state)=> state.NewsSlice)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    return (
        <div>
            <Spinner loading={loading}/>
            {error ? (<ErrorView error={error}/>) : (
                data && (<NewsList news={data}/>)
            )}
        </div>
    )
})

export default News;
