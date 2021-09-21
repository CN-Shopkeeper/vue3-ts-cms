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
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    };
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.userList = userList;
    },
    changeUsersCount(state, userCount: number) {
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
    },
    changeMenuList(state, List: any[]) {
      state.menuList = List;
    },
    changeMenuCount(state, Count: number) {
      state.menuCount = Count;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "users": {
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
          case "menu": {
            return state.menuList;
          }
        }
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "users": {
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
          case "menu": {
            return state.menuCount;
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
      const pageUrl = "/" + pageName + "/list";

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
        totalCount ?? list.length
      );
      // ↑：menu/list没有totalCount属性
    }
  }
};

export default systemModule;
