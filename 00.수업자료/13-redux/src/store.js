import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './slices/CounterSlice';
import DepartmentSlice from './slices/DepartmentSlice';

const store = configureStore({
    reducer: {
        CounterSlice: CounterSlice,
        DepartmentSlice: DepartmentSlice
    }
})

export default store;