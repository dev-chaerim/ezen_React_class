import { configureStore } from "@reduxjs/toolkit";
import TrafficSlice from "./slices/TrafficSlice";
const store = configureStore({
    reducer: {
        TrafficSlice: TrafficSlice,
    }
});

export default store;