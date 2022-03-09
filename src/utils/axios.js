import Axios from 'axios';

const API = 'https://spiderplatform.co.kr:443';
// const API = 'http://dev.spiderplatform.co.kr';
// const API = 'http://spiderplatform.co.kr';

const _axios = async (url, params) => {
  return await Axios({
    method: 'post',
    url: API + url,
    data: params,
  })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default _axios;
