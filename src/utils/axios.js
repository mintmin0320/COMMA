import Axios from 'axios';

const API = 'http://dev.spiderplatform.co.kr';

const _axios = async (url, params) => {
  const headers = {
    headers: {
      "Opera-Token" : 'HLRDgzyra0wSOroZppcahhODgkAul0/LLlMq9osYH28='
    }
  }

  return await Axios.post(API + url, params, headers)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    }
  );
};

export default _axios;
