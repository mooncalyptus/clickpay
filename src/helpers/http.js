import axios from "axios";

const http = (token) => {
  const headers = {};
  if (token) {
    headers.authorization = "Bearer " + token;
  }
  
  const instance = axios.create({
    baseURL: process.env.BACKEND_URL || 'https://68xkph-8888.preview.csb.app',
    headers,
    keepAlive: true,
  });
  return instance;
};

export default http;




// import axios from "axios";

// const http = axios.create({
//     baseURL: process.env.BACKEND_URL,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   export default http