import { createApp } from "vue";
import { registerApp } from "./global";
import "normalize.css";
import "./assets/css/index.less";

import "element-plus/dist/index.css";

import App from "./App.vue";

import router from "./router";
import store from "./store";
import { setupStore } from "./store";

const app = createApp(App);

registerApp(app);
app.use(store);
setupStore();
app.use(router);

app.mount("#app");
