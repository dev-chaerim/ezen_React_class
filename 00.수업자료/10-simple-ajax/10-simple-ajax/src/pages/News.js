import axios from 'axios';
import React from 'react';

import NewsList from '../components/NewsList';
import Spinner from '../components/Spinner';


const News = () => {
    const [newsList, setNewsList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=> {
        (async ()=> {

            setLoading(true);

            let json = null;

            try {
                const response = await axios.get('/news')
                json = response.data;
            }catch(e) {
                console.error(e);
                alert('Ajax 연동실패')
            } finally {
                setLoading(false);
            }
            
            setNewsList(json);
            
        })();
    }, [])

    return (
        <div>
            <Spinner loading={loading}/>
            <NewsList news={newsList}/>
            
        </div>
    )
}

export default React.memo(News);