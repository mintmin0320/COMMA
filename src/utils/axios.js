import Axios from 'axios';

// const Domain = 'http://dev.spiderplatform.co.kr';
const Domain = 'http://210.121.173.182';

const _axios = async (url, params) => {
  //console.log(url);
  const headers = {
    headers: {
      "Content-type" : "application/json",
      "Opera-Token" : '123abc',
    }
  }

  return await Axios.post(Domain + url, params, headers)
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
