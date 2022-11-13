import { createSlice } from "@reduxjs/toolkit";

const slice이름 = createSlice({
    name: 'slice이름',
    // 이 모듈이 관리하고자하는 상태값들을 명시
    initialState: {
        변수1: 100,
        변수2: 200

    },
    // 상태값을 갱신하기 위한 함수들을 구현
    // 컴포넌트에서 이 함수들을 호출할 때 전달되는 파라미터는 action.payload로 전달된다.
    // initialState와 동일한 구조의 JSON을 리턴한다.
    reducers: {
        액션함수1: (state, action) => {},
        액션함수2: (state, action) => {}
    }
   });
   // 액션함수들 내보내기
   export const { 액션함수1, 액션함수2 } = slice이름.actions;
   // 리듀서 객체 내보내기
   export default slice이름.reducer;