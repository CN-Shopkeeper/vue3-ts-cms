import { createStore, Store, useStore as useVuexStore } from "vuex";

import { IRootState, IStoreType } from "./type";
import login from "./login/login";
import system from "./main/system/system";
import dashboard from "./main/analysis/dashboard";

import { getPageListData } from "@/service/main/system/system";

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "shopkeeper",
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    };
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list;
    },
    changeEntireRole(state, list) {
      state.entireRole = list;
    },
    changeMenuRole(state, list) {
      state.entireMenu = list;
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      });
      const { list: departmentList } = departmentResult.data;
      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      });
      const { list: roleList } = roleResult.data;
      const menuResult = await getPageListData("/menu/list", {});
      const { list: menuList } = menuResult.data;

      // 2.保存数据
      commit("changeEntireDepartment", departmentList);
      commit("changeEntireRole", roleList);
      commit("changeMenuRole", menuList);
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
});

// 重新运行时从本地加载数据到内存
export function setupStore() {
  store.dispatch("login/loadLocalData");
  // 防止此时还没有token
  // store.dispatch("getInitialDataAction");
}

// 解决vuex和typescript不兼容的问题（拿不到带有类型检查的store）
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
