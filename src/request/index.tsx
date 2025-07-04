import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: "/api",
  timeout: 3000,
  timeoutErrorMessage: "请求超时，请稍后再试",
  withCredentials: true,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }

    if (import.meta.env.VITE_MOCK === "true") {
      config.baseURL = import.meta.env.VITE_MOCK_API;
    } else {
      config.baseURL = import.meta.env.VITE_BASE_API;
    }
    return {
      ...config,
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const data = response.data;
    if (data.code === 500001) {
      localStorage.removeItem("token");
      location.href = "/login";
    } else if (data.code != 0) {
      return Promise.reject(data);
    }
    return data.data;
  },
  (error) => {
    return Promise.reject(error.message);
  }
);

export default {
  get(url: string, params: object) {
    return instance.get(url, { params });
  },
  post(url: string, params: object) {
    return instance.post(url, params);
  },
};
