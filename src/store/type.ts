import { ILoginState } from "./login/type";
import { IDashboardState } from "./main/analysis/types";
import { ISystemState } from "./main/system/type";

export interface IRootState {
  name: string;
  entireDepartment: any[];
  entireRole: any[];
  entireMenu: any[];
}

export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
  dashboard: IDashboardState;
}

export type IStoreType = IRootState & IRootWithModule;
