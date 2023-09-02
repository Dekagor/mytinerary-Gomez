import axios from "axios";

const citiesQueries = axios.create ({
    baseURL: 'http://localhost:3000/api/cities',
})


export const getAllCities = async() => {
    try {
        const response = await citiesQueries()
        return response.data.response
    } catch (error) {
        return []
    }
}