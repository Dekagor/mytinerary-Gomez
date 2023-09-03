import { createReducer } from "@reduxjs/toolkit";
import { allCities, allCitiesAsync, filteredCities, filteredCitiesAsync } from "../actions/citiesActions";


const InitialState = {
    allCities: [],
    filteredCities: [],
}

export const citiesReducer = createReducer(InitialState, ( builder ) =>
    builder

    .addCase(allCities,(state, action) => {
        return {
            ...state,
            allCities : action.payload,
            filteredCities : action.payload
        }
    })

    .addCase(filteredCities,(state, action) => {
        const filteredInput = state.allCities.filteredCities(city => city.name.toLowerCase().startsWith(action.payload.inputValue))
        let newFilteredCities = filteredInput
        return {
            ...state,
            filteredSearch : newFilteredCities
        }
    })

    .addCase(allCitiesAsync.fulfilled, (state, action) => {
        console.log(state);
        console.log(action.payload);
        return {
            ...state,
            allCities : action.payload,
            filteredCities : action.payload
        }
    } )

    .addCase(filteredCitiesAsync.fulfilled, (state, action) => {
        console.log(state);
        console.log(action.payload);
        return search
    } )

)
