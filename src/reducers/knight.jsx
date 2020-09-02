import {SET_KNIGHT, ADD_KNIGHT, DELETE_KNIGHT} from "../constants/actions";


let stateInit = {
    knights: [
        "Jack",
        "Daniels",
        "Scott"
    ],
    knight : '',
    countKnight : 3

}

let reducer = (state = stateInit, action = {}) => {
    switch (action.type) {

        case SET_KNIGHT:

            let knight = action.payload;

            return {
                ...state,
                knight: knight

            }


        case ADD_KNIGHT:

            if (state.knight.length > 0) {

                return {
                    ...state,
                    knights: state.knights.concat(state.knight),
                    knight: '',
                    countKnight: state.countKnight + 1

                }
            }
            return state


        case DELETE_KNIGHT:

            if (state.countKnight <= 0) {
                return state
            }
            state.knights = state.knights.filter(k => k !== action.payload);
            return {
                ...state,
                knight: '',
                countKnight: state.countKnight - 1,

            }

        default:
            return state;

    }
}
export default reducer;

