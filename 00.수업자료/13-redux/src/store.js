import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './slices/CounterSlice';
import DepartmentSlice from './slices/DepartmentSlice';
import NewsSlice from './slices/NewsSlice';
import MovieRankSlice from './slices/MovieRankSlice';
import ImageSearchSlice from './slices/ImageSearchSlice';

const store = configureStore({
    reducer: {
        CounterSlice: CounterSlice,
        DepartmentSlice: DepartmentSlice,
        NewsSlice: NewsSlice,
        MovieRankSlice: MovieRankSlice,
        ImageSearchSlice: ImageSearchSlice
    }
})

export default store;