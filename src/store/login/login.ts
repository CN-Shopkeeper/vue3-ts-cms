import { Module } from "vuex";

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from "@/service/login/login";
import localCache from "@/utils/cache";
import { mapMenusToRoutes, mapMenusToPermissions } from "@/utils/map-menus";
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
      userMenus: undefined,
      permissions: []
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

      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus);
      // 将routes = > router.main.children
      routes.forEach((route) => {
        router.addRoute("main", route);
      });

      // 获取用户的按钮权限
      const permissions = mapMenusToPermissions(userMenus);
      state.permissions = permissions;
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      commit("changeToken", token);
      localCache.setCache("token", token);

      // 发送初始化的请求（原先在index.ts中）
      dispatch("getInitialDataAction", null, { root: true });

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
    loadLocalData({ commit, dispatch }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
        // 发送初始化的请求（原先在index.ts中）
        dispatch("getInitialDataAction", null, { root: true });
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
