import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "../store/reducers/citiesReducers";






export const store = configureStore({
    reducer: {
        cities: citiesReducer
    },
});
