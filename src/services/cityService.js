import axios from "axios";


const citiesQueries = axios.create ({
    baseURL: 'http://localhost:3000/api/cities',
})


export const getAllCities = async(queryParams="") => {
    try {
        const demand = await citiesQueries(queryParams)
        return demand.data.response
    } catch (error) {
        return []
    }
}


export const getAllFiltered = async(queryParams="") => {
    try {
        await citiesQueries(queryParams).then((response) => {
            setDataDemand(response.data['results']);
        } )
    } catch (error) {
        return []
    }
}
