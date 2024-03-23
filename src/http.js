import axios from 'axios';

export default axios.create({
    baseURL : "http://localhost/bank/laravel-backend/api",
    headers: {
        "Content-Type":"application/json"
    }
});

