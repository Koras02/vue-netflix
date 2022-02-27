import axios from 'axios';

const API_KEY = '7db8b1ffbba88aaa67068565d84fe99f';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: API_KEY,
    },
});

export default instance;
