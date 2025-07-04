import axios, { AxiosError } from "axios";

const baseURL = import.meta.env.VITE_BASE_API
const instance = axios.create({
  baseURL: baseURL,
  timeout: 3000,
  timeoutErrorMessage: "请求超时，请稍后再试",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  }
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const data = response.data;
    if (data.code === 40001) {
      localStorage.removeItem("token");
      location.href = "/login";
    } else if (data.code !== 200) {
      return Promise.reject(data);
    }
    return data.data;
  },
  (error) => {
    return Promise.reject(error.message);
  }
);

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, { params });
  },
  post<T>(url: string, params?: object): Promise<T> {
    return instance.post(url, params);
  },
  put<T>(url: string, params?: object): Promise<T> {
    return instance.put(url, params);
  },
  delete<T>(url: string, params?: object): Promise<T> {
    return instance.delete(url, { params });
  },
};
