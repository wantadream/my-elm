import axios from "axios";
let baseURL = "https://elm.cangdu.org";
export const instance = axios.create({
  baseURL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const request = (url, data = {}, method = "get") => {
  const options = {
    url,
    method,
  };
  if (method.toLowerCase() === "get") {
    options.params = data;
  } else {
    options.data = data;
  }
  return instance(options)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};
// export default request;
