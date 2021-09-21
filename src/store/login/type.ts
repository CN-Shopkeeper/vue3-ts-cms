import { UserInfo, UserMenus } from "@/service/login/type";

export interface ILoginState {
  token?: string;
  userInfo?: UserInfo;
  userMenus?: UserMenus;
  permissions: string[];
}
