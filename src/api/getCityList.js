import request from "../config/axios";

 const getCityList = async  (url, params) => {
	let data
  await request({ url, params }).then((res) => {
    data = res.data;
  });
	return data
};
export default getCityList;