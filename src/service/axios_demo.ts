import axios from "axios";

// 4.axios的配置选项
// 4.1全局配置
axios.defaults.baseURL = "http://httpbin.org";
axios.defaults.timeout = 10000;
// axios.defaults.headers = {}

// axios的实例对象
// 1.模拟get请求
axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res.data);
});

// 4.2每个请求的单独配置
// 2.get请求，并传入参数
axios
  .get("/get", {
    params: { name: "shopkeeper", age: 18 },
    timeout: 5000,
    headers: {}
  })
  .then((res) => {
    console.log(res.data);
  });

// 3.post请求
axios
  .post("/post", {
    data: {
      name: "shopkeepeer",
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data);
  });

// Promise本身是可以有类型的
// new Promise<string>((resolve) => {
//   resolve("123");
// }).then((res) => {
//   console.log(res.length);
// });

// 5.axios.all -> 多个请求一起返回
axios
  .all([
    axios.get("/get", {
      params: { name: "shopkeeper", age: 18 }
    }),
    axios.post("/post", {
      data: { name: "shopkeeper", age: 18 }
    })
  ])
  .then((res) => {
    console.log(res);
  });

// 6.axios的拦截器
// 请求拦截器
// fn1：请求发送成功执行的函数
// fn2：请求发生失败执行的函数
axios.interceptors.request.use(
  (config) => {
    // 一些想做的操作
    // 1.添加token
    // 2.isLoading动画
    return config;
  },
  (err) => {
    console.log("请求发送错误");
    return err;
  }
);

// 响应拦截器
// fn1：数据响应成功（服务器正常的返回了数据）
// fn2：数据响应失败
axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截");
    return res;
  },
  (err) => {
    console.log("服务器响应失败");
    return err;
  }
);
