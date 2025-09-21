import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "@/store/slicers";


const store = configureStore({
    reducer: {
        slider: sliderReducer,
    },
});

export type SliderState = {
    value: number;
};
export default store;