import Axios from "axios";

const _axiosUrl = async (url, params, header) => {
  // console.log(url);

  // console.log(params);

  return await Axios({
    method: "post",
    url: url,
    data: params,
    headers: header,
  })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default _axiosUrl;
