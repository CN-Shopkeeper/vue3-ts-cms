import { Module } from "vuex";

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
  mutations: {},
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log("执行accountLoginAction", payload);
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log("执行phoneLoginAction", payload);
    }
  }
};

export default loginModule;
