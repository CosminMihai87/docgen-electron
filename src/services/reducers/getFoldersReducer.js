import * as actionTypes from '../actionTypes';
import { updateObject } from '../../util/utility';

const initialState = {
    loading: false,
    error: '',
    status: '',
    statusText: '',
    id: '',
    data: [],
    nr_folders: 0
};

const getFoldersStart = ( state ) => {
    return updateObject( state, {
        loading: true
    } );
};

const getFoldersSuccess = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        status: action.status,
        statusText: action.statusText,
        id: action.id,
        data: action.data,
        nr_folders: action.nr_folders
    } );
};

const getFoldersFail = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        error: action.error
    } );
};

const getFoldersReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_FOLDERS_START: return getFoldersStart( state );
        case actionTypes.GET_FOLDERS_SUCCESS: return getFoldersSuccess( state, action );
        case actionTypes.GET_FOLDERS_FAIL: return getFoldersFail( state, action );
        default: return state;
    }
};

export default getFoldersReducer;
