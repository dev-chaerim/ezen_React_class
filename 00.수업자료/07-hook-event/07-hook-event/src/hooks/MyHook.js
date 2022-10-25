import React from 'react';

const useMyWidth = () => {
    const [myWidth, setMyWidth] = React.useState(window.innerWidth);
    const onMyResize = () => setMyWidth(window.innerWidth);

    React.useEffect(()=> {
        window.addEventListener('resize', onMyResize);
        return ()=> window.removeEventListener('resize', onMyResize);
    }, [])

    return myWidth;
 }

 export default useMyWidth;