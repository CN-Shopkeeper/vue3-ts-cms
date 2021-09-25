// 1.手动修改

// 2.根据process.env.NODE_ENV
// 开发环境：development
// 生产环境：production
// 测试环境：test
let BASE_URL = "";
const TIME_OUT = 10000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "/api";
} else {
  BASE_URL = "/api";
}

export { TIME_OUT, BASE_URL };

// 3.在根目录中创建环境变量
// .env .env.development .env.test

// 一般使用第二种
