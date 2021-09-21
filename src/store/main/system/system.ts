import { IRootState } from "@/store/type";
import { Module } from "vuex";
import { ISystemState } from "./type";

import { getPageListData } from "@/service/main/system/system";

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0
    };
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    },
    changeRoleList(state, List: any[]) {
      state.roleList = List;
    },
    changeRoleCount(state, Count: number) {
      state.roleCount = Count;
    },
    changeGoodsList(state, List: any[]) {
      state.goodsList = List;
    },
    changeGoodsCount(state, Count: number) {
      state.goodsCount = Count;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "user": {
            return state.userList;
            break;
          }
          case "role": {
            return state.roleList;
            break;
          }
          case "goods": {
            return state.goodsList;
          }
        }
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "user": {
            return state.userCount;
            break;
          }
          case "role": {
            return state.roleCount;
            break;
          }
          case "goods": {
            return state.goodsCount;
            break;
          }
        }
      };
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1.获取pageUrl
      const pageName: string = payload.pageName;
      let pageUrl = "";
      switch (pageName) {
        case "user": {
          pageUrl = "/users/list";
          break;
        }
        case "role": {
          pageUrl = "/role/list";
          break;
        }
        case "goods": {
          pageUrl = "/goods/list";
        }
      }

      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);

      // 3.将数据存储到state中
      const { list, totalCount } = pageResult.data;
      commit(
        `change${pageName.charAt(0).toUpperCase() + pageName.slice(1)}List`,
        list
      );
      commit(
        `change${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Count`,
        totalCount
      );
    }
  }
};

export default systemModule;
