import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface SKRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}

export interface SKRequestConfig extends AxiosRequestConfig {
  interceptors?: SKRequestInterceptors;
}
