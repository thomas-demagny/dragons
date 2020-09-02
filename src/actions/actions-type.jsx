import {
    ADD_DRAGON,SET_DRAGON,DELETE_DRAGON,REVERSE_ORDER,
    SET_LOG,DELETE_LOGS,
    ADD_KNIGHT, SET_KNIGHT, DELETE_KNIGHT
} from '../constants/actions';

/* EXPORTS DRAGON */
export const setDragon = payload => {

    return {
        type: SET_DRAGON, payload

    }
};

export const addDragon = () => {
    return{
        type : ADD_DRAGON
    }
}


export const deleteDragon = payload => {
    return{
        type : DELETE_DRAGON, payload
    }
}

export const reverseOrder = payload => {
    return{
        type : REVERSE_ORDER, payload
    }
}

/* EXPORT KNIGHT */

export const setKnight = payload => {

    return {
        type: SET_KNIGHT, payload

    }
};

export const addKnight = () => {
    return{
        type : ADD_KNIGHT
    }
}


export const deleteKnight = payload => {
    return{
        type : DELETE_KNIGHT, payload
    }
}

/* EXPORT LOGS */
export const setLog = payload => {
    return{
        type : SET_LOG, payload
    }
}

export const deleteLogs = () => {
    return {
        type: DELETE_LOGS
    }
}












