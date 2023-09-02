import { createAction } from "@reduxjs/toolkit";



export const allCities = createAction('allCities', (cities) => {
    console.log(payload);

    return{
        payload: {
            cities: cities,
        }
    }
} )


export const filteredCities = createAction('filteredCities', (filtered) => {
    console.log(payload);

    return{
        payload: filtered
    }
} )



