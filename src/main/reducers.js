import { combineReducers } from 'redux'
import SearchCityReducer from '../searchCitiy/searchcityReducer'


const rootReducer = combineReducers({
    searchcity: SearchCityReducer
})

export default rootReducer