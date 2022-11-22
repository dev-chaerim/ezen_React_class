import { configureStore } from "@reduxjs/toolkit";
import CovidSlice from "./slices/CovidSlice";

const store = configureStore({
    reducer: {
        CovidSlice:CovidSlice
    }
});

export default store;