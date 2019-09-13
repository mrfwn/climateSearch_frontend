import axios from 'axios'
import swal from 'sweetalert';
import fileKey from '../../key.json'

export function getCitys(city) { 
    return (dispatch) => {  
        axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${city.name}&key=${fileKey.key}&language=pt&pretty=1`)
        .then((data)=> {
            dispatch({
                type: 'GET_CITYS',
                name: city.name,
                date: city.date,
                citys: data.data.results
            })
        })
    }
} 

function toTimestamp(strDate){
    return 
   }

export function addCity(city,date=''){
    date = date != '' ?  (Date.parse(date)/1000)+'&' : ''
    return (dispatch) => {
        axios.get(`http://localhost:5051/forecast/${city.geometry.lat},${city.geometry.lng}?${date}units=si&exclude=minutely,hourly&lang=pt`)
        .then((data)=>{
            swal( {title: 'Cidade Registrada', text: ``, icon: 'success', buttons: [false] , timer: 2500});
            dispatch({
                type: 'ADD_CITY',
                city: {
                    selected: city,
                    info:data
                }
            })
        })
    }
}