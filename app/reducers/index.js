import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import posts from './posts';
import selections from './selections';
import betslip from './betslip';
import stakes from './stakes';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    filter,
    routing,
    posts,
    selections,
    betslip,
    stakes,
    form: formReducer
});

export default rootReducer;
