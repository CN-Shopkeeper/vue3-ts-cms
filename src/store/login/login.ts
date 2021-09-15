import { Module } from "vuex";

import { accountLoginRequest } from "@/service/login/login";
import { IAccount } from "@/service/login/type";
import { ILoginState } from "./type";
import { IRootState } from "../type";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {}
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      commit("changeToken", token);

      // 2.
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log("执行phoneLoginAction", payload);
    }
  }
};

export default loginModule;
