let baseURL = "https://elm.cangdu.org";
import axios from 'axios';

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
	return config;
}, (err) => {
	return Promise.reject(err)
})

instance.interceptors.response.use(res => {
	return res.data
}, err => {
	return Promise.reject(err)
})

export default instance
