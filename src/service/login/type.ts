export interface IAccount {
  name: string;
  password: string;
}

export interface ILoginResult {
  id: number;
  name: string;
  token: string;
}

export interface Role {
  id: number;
  name: string;
  intro: string;
  createAt?: Date;
  updateAt?: Date;
}

export interface Department {
  id: number;
  name: string;
  parentId?: any;
  createAt?: Date;
  updateAt?: Date;
  leader: string;
}

export interface UserInfo {
  id: number;
  name: string;
  realname: string;
  cellphone: number;
  enable: number;
  createAt?: Date;
  updateAt?: Date;
  role: Role;
  department: Department;
}

export interface Child {
  id: number;
  url: string;
  name: string;
  sort: number;
  type: number;
  children?: any;
  parentId: number;
}

export interface UserMenuItem {
  id: number;
  name: string;
  type: number;
  url: string;
  icon: string;
  sort: number;
  children: Child[];
}

export interface UserMenus {
  [index: number]: UserMenuItem;
}

export interface IDataType<T = any> {
  code: number;
  data: T;
}
