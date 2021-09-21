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

export interface UserMenuItem {
  id: number;
  name: string;
  type: number;
  url: string;
  icon: string;
  sort: number;
  children?: UserMenuItem[];
  parentId?: number;
  permission?: any;
}

// 如何定义一个数组？
// 使用interface存在弊端，获取的是一个object而不是array
// https://stackoverflow.com/a/25469668/14347713
// https://stackoverflow.com/a/50216229/14347713
export type UserMenus = UserMenuItem[];
