import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_URL = '...';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const 함수이름 = createAsyncThunk("slice이름/함수이름", async (payload, {rejectWithValue }) => {
    let result = null;
    try {
        const response = await axios.get(API_URL);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});


const slice이름 = createSlice({
    name: 'slice이름',
    // 이 모듈이 관리하고자하는 상태값들을 명시
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    // 상태값을 갱신하기 위한 함수들을 구현
    // Ajax의 처리 과정에 따라 자동으로 실행된다.

    extraReducers: {
        // 로딩중임을 표시
        [함수이름.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        // 처리가 완료된 경우 - 미들웨어 함수가 정상적으로 리턴한 경우
        [함수이름.fulfilled]: (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: null
            }
        },
        // 처리에 실패한 경우 - 미들웨어 함수 안에서 예외가 발생하여 catch블록이 실행된경우
        [함수이름.rejected]: (state, { payload }) => {
            return {
                ...state, 
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    },
});

export default slice파일이름.reducer;