import skRequest from "..";

import { IAccount, ILoginResult, UserInfo, UserMenus } from "./type";
import { IDataType } from "../type";
enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenu = "/role/" //role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return skRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}

export function requestUserInfoById(id: number) {
  return skRequest.get<IDataType<UserInfo>>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  });
}

export function requestUserMenuByRoleId(id: number) {
  return skRequest.get<IDataType<UserMenus>>({
    url: LoginAPI.UserMenu + id + "/menu",
    showLoading: false
  });
}
