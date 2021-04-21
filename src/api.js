import axios from 'axios';
const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': 'your-manually entered token'
    }
});

export default api;