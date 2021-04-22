import axios from 'axios';
const api = axios.create({
    //baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA4MWU2NjIyNWM3NjQ0Njk4MDM2MDk0In0sImlhdCI6MTYxOTEyNTg1OCwiZXhwIjoxNjE5NTU3ODU4fQ.ZmxoD6qh_imRi2xKhy-gtgmUM0Yd-JUiiaR-JtN_RtA'
    }
});

export default api;