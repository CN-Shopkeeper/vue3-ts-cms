import { UserMenuItem, UserMenus } from "@/service/login/type";
import { RouteRecordRaw } from "vue-router";

let firstMenu: UserMenuItem;

export function mapMenusToRoutes(userMenus: UserMenus): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = require.context("../router/main", true, /\.ts/); //webpack中的函数
  routeFiles.keys().forEach((key) => {
    // ./system/user/user.ts => ../router/main/system/user/user
    const route = require("../router/main" + key.split(".")[1]);
    allRoutes.push(route.default);
  });

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type ===1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: UserMenus | undefined) => {
    for (const menu of menus ?? []) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url;
        });
        if (route) {
          routes.push(route);
          if (!firstMenu) {
            firstMenu = menu;
          }
        }
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };

  _recurseGetRoute(userMenus);

  return routes;
}

export function pathMapToMenu(
  userMenus: UserMenus | undefined,
  currentPath: string
): UserMenuItem | undefined {
  for (const menu of userMenus ?? []) {
    if (menu.type === 1) {
      const findMenu: UserMenuItem | undefined = pathMapToMenu(
        menu.children,
        currentPath
      );
      if (findMenu) {
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}

export { firstMenu };
