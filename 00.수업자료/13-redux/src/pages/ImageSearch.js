import React, {memo, useEffect} from 'react';
import { useQueryString } from '../hooks/useQueryString';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import SearchForm from '../components/SearchForm';
import ImageList from '../components/ImageList';
import ImageView from '../components/ImageView';

import { useSelector, useDispatch } from 'react-redux';

import { getKakaoSearch } from '../slices/ImageSearchSlice';

import { useInView } from "react-intersection-observer";

import dayjs from 'dayjs';


const ImageSearch = memo(() => {

    const { query } = useQueryString();
    const dispatch = useDispatch();

    const {data, loading, error} = useSelector((state) => state.ImageSearchSlice);

    const [isEnd, inView] = useInView();

    useEffect(() => {
        if(query) {
            dispatch(getKakaoSearch(query));
        }
    }, [dispatch, query]);

    useEffect(() => {
        if( inView && !loading) {
            console.log("스크롤이 맨 끝에 도착함")
        }
    }, [inView, loading])

    return (
        <div>
            <Spinner loading={loading} />
            <SearchForm />

            {error ? (
                <ErrorView error={error}/>
            ) : (
                (query && data) && (
                    <ImageList>
                        {
                            data.documents.map(({ doc_url, image_url, thumbnail_url, display_sitename, collection, width, height, datetime}, i) => {
                                
                                return (
                                    <li className='list-item' key={i} ref={isEnd}>
                                        <a className="list-item-link" href={doc_url} target="_blanc" rel="noreferrer">
                                            <div className='thumbnail_url'>
                                                <ImageView src={thumbnail_url} alt={display_sitename}/>
                                            </div>
                                            <div className='content'>
                                                <h3>{display_sitename}</h3>
                                                <ul>
                                                    <li>{collection}</li>
                                                    <li>이미지: {width}x{height}</li>
                                                    <li>{dayjs(datetime).format('YYYY-MM-DD hh:mm')}</li>
                                                </ul>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ImageList>
                )
            )}
        </div>
    )
})

export default ImageSearch;