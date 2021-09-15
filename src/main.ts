import { createApp } from "vue";
import { registerApp } from "./global";
import "normalize.css";
import "./assets/css/index.less";

import "element-plus/dist/index.css";

import App from "./App.vue";

import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);
registerApp(app);
app.mount("#app");
