import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=9f11cab5dffa3d6b4944a08f7a88559e&query='
    }
)