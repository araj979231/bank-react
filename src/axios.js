import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://thinkdream.in/bank/api/"
 
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer 1234`
  return config
});

axiosClient.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('TOKEN')
    window.location.reload();
    
    return error;
  }
  throw error;
})

export default axiosClient;
