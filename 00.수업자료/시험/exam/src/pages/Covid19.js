import React, {memo, useMemo} from "react";
import Top from "../components/Top";
import MenuLink from "../components/MenuLink";
import { useQueryString } from '../hooks/useQueryString';
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../slices/CovidSlice';
import LineChartView from "../components/LineChartView";

const Covid19 = memo(() => {
    
    const dispatch = useDispatch();
    const {data, loading, error, gte, lte} = useSelector((state) => state.CovidSlice);

    React.useEffect(() => {
        dispatch(getList({
            gte,
            lte
        }));
    }, [gte, lte]);
  

    return (
        <div>
            <nav>
                <MenuLink to='confirmed'>일일확진자</MenuLink>
                <MenuLink to='confirmed_acc'>누적확진자</MenuLink>
                <MenuLink to='active'>격리환자</MenuLink>
            </nav>

            <Routes>
                <Route path='/:subject' element={<LineChartView/>} />

            </Routes>
        </div>
    )
})

export default Covid19;