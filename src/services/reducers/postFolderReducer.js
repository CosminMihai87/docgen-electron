import * as actionTypes from '../actionTypes';
import { updateObject } from '../../util/utility';

const initialState = {
    loading: false,
    error: '',
    status: '',
    statusText: '',
    id: ''
};

const postFolderStart = ( state ) => {
    return updateObject( state, {
        loading: true
    } );
};

const postFolderSuccess = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        status: action.status,
        statusText: action.statusText,
        id: action.id
    } );
};

const postFolderFail = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        error: action.error
    } );
};

const postFolderReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.POST_FOLDER_START: return postFolderStart( state );
        case actionTypes.POST_FOLDER_SUCCESS: return postFolderSuccess( state, action );
        case actionTypes.POST_FOLDER_FAIL: return postFolderFail( state, action );
        default: return state;
    }
};

export default postFolderReducer;
