import axios from "axios";
import type { AxiosInstance } from "axios";

import { SKRequestInterceptors, SKRequestConfig } from "./type";

class SKRequest {
  instance: AxiosInstance;
  interceptors?: SKRequestInterceptors;
  constructor(config: SKRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有实例都有的拦截器：请求成功");

        return config;
      },
      (err) => {
        console.log("所有实例都有的拦截器：请求失败");
        console.log(err);
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有实例都有的拦截器：响应成功");
        return res.data;
      },
      (err) => {
        console.log("所有实例都有的拦截器：响应失败");
        // 判断不同的error code显示不同的信息
        if (err.response.status === 404) {
          console.log("404错误~");
        }
        return err;
      }
    );
  }

  request(config: SKRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res);
      }
      console.log(res);
    });
  }
}

export default SKRequest;
