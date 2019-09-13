const INITIAL_STATE = {
    name: '',
    date:'',
    list: [],
    city:[]
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_CITY':
            return {...state, city: [...state.city,action.city],list:[]}
        case 'GET_CITYS':
            return {...state , name: action.name, date:action.date ,list: action.citys}  
        default:
            return state
    }
}