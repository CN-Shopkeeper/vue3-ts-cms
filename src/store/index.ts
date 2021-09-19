import { createStore, Store, useStore as useVuexStore } from "vuex";

import { IRootState, IStoreType } from "./type";
import login from "./login/login";
import system from "./main/system/system";

const store = createStore<IRootState>({
  state: () => {
    return { name: "shopkeeper" };
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
});

// 重新运行时从本地加载数据到内存
export function setupStore() {
  store.dispatch("login/loadLocalData");
}

// 解决vuex和typescript不兼容的问题（拿不到带有类型检查的store）
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
