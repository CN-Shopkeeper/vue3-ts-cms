import { createStore, Store, useStore as useVuexStore } from "vuex";

import { IRootState, IStoreType } from "./type";
import login from "./login/login";
import system from "./main/system/system";

import { getPageListData } from "@/service/main/system/system";

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "shopkeeper",
      entireDepartment: [],
      entireRole: []
    };
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list;
    },
    changeEntireRole(state, list) {
      state.entireRole = list;
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

      // 2.保存数据
      commit("changeEntireDepartment", departmentList);
      commit("changeEntireRole", roleList);
    }
  },
  modules: {
    login,
    system
  }
});

// 重新运行时从本地加载数据到内存
export function setupStore() {
  store.dispatch("login/loadLocalData");
  store.dispatch("getInitialDataAction");
}

// 解决vuex和typescript不兼容的问题（拿不到带有类型检查的store）
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
