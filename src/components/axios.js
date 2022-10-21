import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://hiyalo-app-backend.herokuapp.com/'
});

instance.interceptors.request.use(
        async (config) => {
        //   if (!config.headers.Authorization) {
            // const token = localStorage.getItem("token").then(value => value)
            // console.log("ttt: " + token)
            // console.log(config)
            // if (token) {
              // config.headers.Authorization = `Bearer ${token}`;
            // }
        //   }
    
          return config;
        },
        error => Promise.reject(error)
      );

export default instance;