import {ADD_DRAGON, SET_DRAGON, DELETE_DRAGON, REVERSE_ORDER} from '../constants/actions';

// initialisation des states : SOURCE DE VERITE
let stateInit = {
    dragons: [
        "Targül",
        "Zordak",
        "Torghal"
    ],
    dragon : '',
    count: 3

}

let reducer = (state = stateInit, action = {}) => {
    switch (action.type) {

        case SET_DRAGON:
            let dragon  = action.payload;


            return { ...state,
                dragon: dragon,

            }

        case ADD_DRAGON:
            if(state.dragon.length > 0) {

                return {
                    ...state,
                    dragons: state.dragons.concat(state.dragon),
                    dragon: '',
                    count: state.count +1

                }
            } return state


        case DELETE_DRAGON:
            if (state.count <= 0) {
                return state
            }
            state.dragons = state.dragons.filter(d => d !== action.payload);
            return {
                ...state,
                dragon: '',
                count: state.count -1,

            }

        case REVERSE_ORDER:

            return {
                ...state,
                dragons: state.dragons.reverse(),
                dragon: '',

            }

        default:
            return state;
    }


}

export default reducer;