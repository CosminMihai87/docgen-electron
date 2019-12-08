import * as actionTypes from '../actionTypes';
import { updateObject } from '../../util/utility';

const initialState = {
    loading: false,
    error: '',
    status: '',
    statusText: '',
    id: '',
    data: []
};

const getMacheteStart = ( state ) => {
    return updateObject( state, {
        loading: true
    } );
};

const getMacheteSuccess = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        status: action.status,
        statusText: action.statusText,
        id: action.id,
        data: action.data
    } );
};

const getMacheteFail = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        error: action.error
    } );
};

const getMacheteReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_MACHETE_START: return getMacheteStart( state );
        case actionTypes.GET_MACHETE_SUCCESS: return getMacheteSuccess( state, action );
        case actionTypes.GET_MACHETE_FAIL: return getMacheteFail( state, action );
        default: return state;
    }
};

export default getMacheteReducer;
