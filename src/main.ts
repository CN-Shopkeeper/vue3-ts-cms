import { createApp } from "vue";

import { registerApp } from "./global";
import skRequest from "./service";

// import "./service/axios_demo";

// 全局引用
// import ElementPlus from "element-plus";
// import "element-plus/theme-chalk/index.css";

// 官方推荐一次性导入全部样式
import "element-plus/dist/index.css";

import App from "./App.vue";

import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);
registerApp(app);
// app.use(ElementPlus);
app.mount("#app");

console.log(process.env.VUE_APP_BASE_NAME, process.env.VUE_APP_BASE_URL);

skRequest.request({
  url: "/home/multidata",
  method: "GET"
});
