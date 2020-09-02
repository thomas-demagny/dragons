import { combineReducers } from 'redux';

import dragon from '../reducers/dragon';
import knight from '../reducers/knight';
import logs from '../reducers/logs';




export default combineReducers({
    dragonReducer : dragon,
    knightReducer : knight,
    logReducer : logs
});