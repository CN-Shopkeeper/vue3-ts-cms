import { createStore } from "vuex";

import { IRootState } from "./type";
import login from "./login/login";

const store = createStore<IRootState>({
  state: () => {
    return { name: "shopkeeper" };
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
});

// 重新运行时从本地加载数据到内存
export function setupStore() {
  store.dispatch("login/loadLocalData");
}

export default store;
