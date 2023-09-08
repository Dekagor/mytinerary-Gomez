import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllCities } from "../../services/cityService";



export const allCities = createAction('all_Cities', (cities) => {

    return{
        payload: {
            cities: cities,
        }
    }
} )


export const allCitiesAsync = createAsyncThunk('all_Cities_Async', async () => {

    try {
        const cities = await getAllCities()
        return cities
    } catch (error) {
        return []
    }
} )


export const CityAsync = createAsyncThunk('City_Async', async (id) => {
    try {
        const demand = await axios (`http://localhost:3000/api/city/${id}`)
        return demand.data.city
    } catch (error) {
        return []
    }
} )


export const filteredCities = createAction('filtered_Cities', (search) => {

    return{
        payload: {
            inputValue : search
        }
    }
} )


    /*export const filteredCitiesAsync = createAsyncThunk('filtered_Cities_Async', async () => {
    try {
        const search = await getAllFiltered()
        return search
    } catch (error) {
        return []
    } } )






 otra forma de usar axios

    export const allCitiesAsync = createAsyncThunk('all_Cities_Async', async () => {
    try {
        const demand = await axios('http://localhost:3000/api/cities')
        return demand.data.response
    } catch (error) {
        return []
    } } ) */

