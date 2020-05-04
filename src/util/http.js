import axios from "axios";
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;
axios.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.status == 0) {
      return res.data;
    } else if (res.status == 10) {
      if (window.location.hash != "#/index") {
        window.location.href = "/#/login";
      }

      return Promise.reject(res);
    } else {
      alert(res.msg);
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
class Http {
  static async http(url, method, data = {}) {
    const result = await axios({
      method,
      url,
      data,
      params: data,
    });
    return result;
  }
}

export { Http };
