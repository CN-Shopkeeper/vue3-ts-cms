import { IRootState } from "@/store/type";
import { Module } from "vuex";
import { ISystemState } from "./type";

import {
  deletePageData,
  getPageListData,
  createPageData,
  editPageData
} from "@/service/main/system/system";

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
      // 1.??????pageUrl
      const pageName: string = payload.pageName;
      const pageUrl = "/" + pageName + "/list";

      // 2.?????????????????????
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);

      // 3.??????????????????state???
      const { list, totalCount } = pageResult.data;

      commit(
        `change${pageName.charAt(0).toUpperCase() + pageName.slice(1)}List`,
        list
      );
      commit(
        `change${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Count`,
        totalCount ?? list.length
      );
      // ??????menu/list??????totalCount??????
    },

    async deletePageDataAction({ dispatch }, payload) {
      //  1.??????pageName???id
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;

      // 2.????????????????????????
      await deletePageData(pageUrl);

      // 3.???????????????????????????
      dispatch("getPageListAction", {
        pageName,
        // ?????????queryInfo??????vuex???????????????????????????????????????
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },

    async createPageDataAction({ dispatch }, payLoad: any) {
      // 1.??????????????????
      const { pageName, newData } = payLoad;
      const pageUrl = `/${pageName}`;
      await createPageData(pageUrl, newData);
      // 2.??????????????????
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },

    async editPageDataAction({ dispatch }, payLoad: any) {
      // 1.?????????????????????
      const { pageName, editData, id } = payLoad;
      const pageUrl = `/${pageName}/${id}`;
      await editPageData(pageUrl, editData);
      // 2.??????????????????
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    }
  }
};

export default systemModule;
