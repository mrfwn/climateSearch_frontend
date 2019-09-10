export function addCity(city){
    return {
        type: 'ADD_CITY',
        name: city.name,
        climate: city.climate
    }
}