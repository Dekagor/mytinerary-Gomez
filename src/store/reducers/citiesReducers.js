import { createReducer } from "@reduxjs/toolkit";
import { allCities, filteredCities } from "../actions/citiesActions";


const InitialState = {
    allCities: [],
    filteredCities: [],
}

export const citiesReducer = createReducer(InitialState, (builder) =>
    builder

    .addCase(allCities,(state, action) => {
        return {
            ...state,
            allCities : action.payload.cities,
            filteredCities : action.payload.cities,
        }
    })

    .addCase(filteredCities,(state, action) => {
        return {
            ...state,
        }
    })

)
