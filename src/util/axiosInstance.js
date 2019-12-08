import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://docgen-electron.firebaseio.com/'
});

export default axiosInstance;