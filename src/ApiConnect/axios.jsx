import axios from 'axios'

export axiosInstance = () => axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: true
})