import { createReducer } from "@reduxjs/toolkit";
import { allCities, allCitiesAsync, filteredCities, CityAsync } from "../actions/citiesActions";


const InitialState = {
    allCities: [],
    filteredCities: [],
    city: null
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

    .addCase(filteredCities, (state, action) => {
        const filteredSearch = state.allCities.filter(city => city.name.toLowerCase().startsWith( action.payload.inputValue ))
        let newFilteredCities = filteredSearch
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

    .addCase(CityAsync.fulfilled, (state, action) => {
        console.log(state);
        console.log(action.payload);
        return {
            ...state,
            City : action.payload,
        }
    } )

)
