import moment from "moment";
import {SET_LOG, DELETE_LOGS} from "../constants/actions";


let stateInit = {
    logs: []

}

let reducer = (state = stateInit, action = {}) => {
    switch (action.type) {

        case SET_LOG:

            const date = moment().format('Do  MMMM  YYYY, h:mm:ss')

            return {
                ...state,
                logs : state.logs.concat({date : date, count : action.payload, countKnight: action.payload})
            }

        case DELETE_LOGS:

            state.logs = state.logs.filter(d => d !== action.payload);

            return {
                ...state,
                logs: []
            }
        default:
            return state
    }



}
export default reducer;


