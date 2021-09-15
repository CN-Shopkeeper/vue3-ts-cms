import { Module } from "vuex";

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from "@/service/login/login";
import localCache from "@/utils/cache";
import { IAccount, UserInfo, UserMenus } from "@/service/login/type";
import { ILoginState } from "./type";
import { IRootState } from "../type";
import router from "@/router";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: undefined,
      userInfo: undefined,
      userMenus: undefined
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: UserInfo) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: UserMenus) {
      state.userMenus = userMenus;
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      commit("changeToken", token);
      localCache.setCache("token", token);

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id);
      commit("changeUserInfo", userInfoResult.data);
      localCache.setCache("userInfo", userInfoResult.data);

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenuByRoleId(
        userInfoResult.data.role.id
      );
      commit("changeUserMenus", userMenusResult.data);
      localCache.setCache("userMenus", userMenusResult.data);

      // 4.跳到首页
      router.push("/main");
    },
    loadLocalData({ commit }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
      }

      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }

      const userMenus = localCache.getCache("userMenus");
      if (userMenus) {
        commit("changeUserMenus", userMenus);
      }
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log("执行phoneLoginAction", payload);
    // }
  }
};

export default loginModule;
