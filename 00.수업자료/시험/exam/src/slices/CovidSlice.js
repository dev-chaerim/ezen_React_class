import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { pending, fulfilled, rejected } from '../helper/ReduxHelper';
import { cloneDeep } from 'lodash';


/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk("CovidSlice/getList", async (payload, {rejectWithValue }) => {

    let result = null;
    const URL = `/covid19?date_gte=${payload.gte}&date_lte=${payload.lte}`;
    
    console.log("getList payload", payload);

    try {
        const response = await axios.get(URL);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});



const CovidSlice = createSlice({
    name: 'CovidSlice',

    initialState: {
        data: null,
        loading: false,
        error: null,
        gte: '2022-05-01',
        lte: '2022-05-04',
    },
    reducers: {
        setDate: (state, action) => {
            state.gte = action.payload.gte;
            state.lte = action.payload.lte;
            console.log("set state",state.gte, state.lte);
        }
    },
    extraReducers: {
       
        
        [getList.pending]: pending,
        [getList.fulfilled]: (state, {meta, payload}) => {
            console.log("@@@@fulfilled", payload, meta)
            return {
                data: [payload],
                loading: false,
                error: null,
                gte: meta.arg.gte,
                lte: meta.arg.lte
            }
        },
        [getList.rejected]: rejected,
        
    },
});

export const {setDate} = CovidSlice.actions;
export default CovidSlice.reducer;