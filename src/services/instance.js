import axios from 'axios';

// Please don't spam it, I'm just don't have time to write a server...
const API_KEY = '7db8b1ffbba88aaa67068565d84fe99f';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: API_KEY,
    },
});

export default instance;
