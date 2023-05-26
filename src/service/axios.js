import { instance as axiosInstance } from "../config/request";

export const request = (url, method = "get", data = {}) => {
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
};
export const request1 = async (url, method = "get", data = {}) => {
  const options = {
    url,
    method,
  };
  if (method.toLowerCase() === "get") {
    options.params = data;
  } else {
    options.data = data;
  }

  try {
    const res = await axiosInstance(options);
    const responseJson = await res.json();
    return responseJson;
  } catch (err) {
    throw new Error(err);
  }
  // return axiosInstance(options)
  //   .then((res) => {
  //     return res;
  //   })
  //   .catch((err) => {
  //     throw err;
  //   });
};
