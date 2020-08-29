import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://movies-rec-9e769.firebaseio.com/'
    }
)