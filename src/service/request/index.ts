import axios from "axios";
import type { AxiosInstance } from "axios";

import { SKRequestInterceptors, SKRequestConfig } from "./type";

import { ElLoading } from "element-plus";
import { ILoadingInstance } from "element-plus";

class SKRequest {
  instance: AxiosInstance;
  interceptors?: SKRequestInterceptors;
  loading?: ILoadingInstance;
  showLoading: boolean;

  constructor(config: SKRequestConfig) {
    // 创建axios的实例
    this.instance = axios.create(config);
    // 保存基本信息
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? true;

    // 使用拦截器
    // 1.从config中取出拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 2.添加全局的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有实例都有的拦截器：请求成功");
        // 添加loading动画
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据",
            background: "rgba(0,0,0,0.3)"
          });
        }
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
        // 移除loading动画
        setTimeout(() => {
          this.loading?.close();
        }, 500);
        return res;
      },
      (err) => {
        console.log("所有实例都有的拦截器：响应失败");
        // 移除loading动画
        setTimeout(() => {
          this.loading?.close();
        }, 500);
        // 判断不同的error code显示不同的信息
        if (err.response.status === 404) {
          console.log("404错误~");
        }
        return err;
      }
    );
  }

  request<T>(config: SKRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      if (config.showLoading != undefined) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          console.log(res);

          // 2.已经被修改过了防止影响别的请求
          this.showLoading = true;

          // 3.将结果resolve返回
          resolve(res.data);
        })
        .catch((err) => {
          this.showLoading = true;
          reject(err);
          return err;
        });
    });
  }

  get<T>(config: SKRequestConfig): Promise<T> {
    return this.request<T>({
      ...config,
      method: "GET"
    });
  }

  post<T>(config: SKRequestConfig): Promise<T> {
    return this.request<T>({
      ...config,
      method: "POST"
    });
  }

  delete<T>(config: SKRequestConfig): Promise<T> {
    return this.request<T>({
      ...config,
      method: "DELETE"
    });
  }

  patch<T>(config: SKRequestConfig): Promise<T> {
    return this.request<T>({
      ...config,
      method: "PATCH"
    });
  }
}

export default SKRequest;
