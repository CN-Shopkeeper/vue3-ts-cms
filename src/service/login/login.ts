import skRequest from "..";

import { IAccount, IDataType, ILoginResult } from "./type";
enum LoginAPI {
  AccountLogin = "/login"
}

export function accountLoginRequest(account: IAccount) {
  return skRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}
