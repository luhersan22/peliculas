
import axios from "axios";


const movieDB = axios.create({
    baseURL: 'http://api.themoviedb.org/3/movie',
    params: {
        api_key: '1a0bf5dc3703f040bda7c22298169664',
        language: 'es-ES'
    }
});

export default movieDB;