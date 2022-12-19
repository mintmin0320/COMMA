import Axios from 'axios';

const _axios = async (url, params) => {
  console.log(params);
  const headers = {
    headers: {
      "Content-type": "application/json",
      "Opera-Token": '123abc',
    }
  }

  return await Axios.post(process.env.REACT_APP_SERVER_DOMAIN + url, params, headers)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    }
    );
};

export default _axios;

