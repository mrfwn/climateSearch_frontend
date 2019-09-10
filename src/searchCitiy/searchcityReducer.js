const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_CITY':
            return [ ...state, {id: Math.random() , name: action.name,climate: action.climate} ]
        default:
            return state
    }
}