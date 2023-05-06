import axiosInstance from "../config/axios";

function request(url, method = "get", data = {}) {
  const options = {
    url,
    method,
  };
  if (method.toLowerCase() === "get") {
    options.params = data;
  } else {
    options.data = data;
  }
  return axiosInstance(options)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

export default request