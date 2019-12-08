import { useReducer, useCallback } from 'react';
import axios from '../util/axiosInstance';
import postFolderReducer from './reducers/postFolderReducer';
import getMacheteReducer from './reducers/getMacheteReducer';
import getFoldersReducer from './reducers/getFoldersReducer';

const Services = () => {

    const [postFolderState, dispatchPostFolder] = useReducer(postFolderReducer, {
        loading: false,
        error: '',
        status: '',
        statusText: '',
        id: ''
    });

    const [getMacheteState, dispatchGetMachete] = useReducer(getMacheteReducer, {
        loading: false,
        error: '',
        status: '',
        statusText: '',
        id: '',
        data: []
    });

    const [getFoldersState, dispatchGetFolders] = useReducer(getFoldersReducer, {
        loading: false,
        error: '',
        status: '',
        statusText: '',
        id: '',
        data: [],
        nr_folders: 0
    });

    const postFolder = useCallback((jsonData) => {
        dispatchPostFolder({ type: 'POST_FOLDER_START' });
        const requestHeader = {
            headers: {
                'Auth': 'AIzaSyDAlC_hhvEQArrmVeJGMhVTzKbt7V4rjao',
                'content-type': 'application/x-www-form-urlencoded'
            }
        };
        axios
            .post('https://docgen-electron.firebaseio.com/FolderStructure/2019.json',
                JSON.stringify(jsonData),
                requestHeader
            )
            .then(response => {
                dispatchPostFolder({
                    type: 'POST_FOLDER_SUCCESS',
                    status: response.status,
                    statusText: response.statusText,
                    id: response.data.name
                });
            })
            .catch(error => {
                dispatchPostFolder({
                    type: 'POST_FOLDER_FAIL',
                    error: error
                });
            });
    }, []);

    const getMachete = useCallback(() => {
        dispatchGetMachete({ type: 'GET_MACHETE_START' });
        const requestHeader = {
            headers: {
                'Auth': 'AIzaSyDAlC_hhvEQArrmVeJGMhVTzKbt7V4rjao',
                'content-type': 'application/x-www-form-urlencoded'
            }
        };
        axios
            .get('https://docgen-electron.firebaseio.com/Machete.json',
                requestHeader
            )
            .then(response => {
                dispatchGetMachete({
                    type: 'GET_MACHETE_SUCCESS',
                    status: response.status,
                    statusText: response.statusText,
                    id: Object.keys(response.data)[0],
                    data: response.data[Object.keys(response.data)[0]]
                });
            })
            .catch(error => {
                dispatchGetMachete({
                    type: 'GET_MACHETE_FAIL',
                    error: error
                });
            });
    }, []);

    const getFolders = () => {
        dispatchGetFolders({ type: 'GET_FOLDERS_START' });
        const requestHeader = {
            headers: {
                'Auth': 'AIzaSyDAlC_hhvEQArrmVeJGMhVTzKbt7V4rjao',
                'content-type': 'application/x-www-form-urlencoded'
            }
        };
        axios
            .get('https://docgen-electron.firebaseio.com/FolderStructure/2019.json',
                requestHeader
            )
            .then(response => {
                dispatchGetFolders({
                    type: 'GET_FOLDERS_SUCCESS',
                    status: response.status,
                    statusText: response.statusText,
                    id: Object.keys(response.data),
                    data: Object.keys(response.data).map(k=> { return response.data[k][0] }),
                    nr_folders: Object.keys(response.data).map(k=> { return response.data[k][0] }).length
                });
            })
            .catch(error => {
                dispatchGetFolders({
                    type: 'GET_FOLDERS_FAIL',
                    error: error
                });
            });
    };

    return {
        postFolder: postFolder,
        postFolderState: postFolderState,

        getMachete: getMachete,
        getMacheteState: getMacheteState,

        getFolders: getFolders,
        getFoldersState: getFoldersState
    };
};

export default Services;