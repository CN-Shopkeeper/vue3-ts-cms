import { IBreadcrumb } from "@/base-ui/breadcrumb";
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
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): UserMenuItem | undefined {
  // 我认为需要手动去除路径结尾的"/"
  if (currentPath.endsWith("/")) {
    currentPath = currentPath.substring(0, currentPath.length - 1);
  }
  for (const menu of userMenus ?? []) {
    if (menu.type === 1) {
      const findMenu: UserMenuItem | undefined = pathMapToMenu(
        menu.children,
        currentPath,
        breadcrumbs
      );
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name, path: menu.url });
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      breadcrumbs?.push({ name: menu.name, path: menu.url });
      return menu;
    }
  }
}

export function pathMapBreadcrumbs(
  userMenus: UserMenus | undefined,
  currentPath: string
) {
  let breadcrumbs: IBreadcrumb[] = [];
  pathMapToMenu(userMenus, currentPath, breadcrumbs);
  breadcrumbs = breadcrumbs.reverse();
  // 根目录没有跳转
  breadcrumbs[0].path = undefined;

  return breadcrumbs;
}

export function mapMenusToPermissions(userMenus: UserMenus) {
  const permissions: string[] = [];
  const _recurseGetPermission = (menus: UserMenus) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? []);
      } else if (menu.type === 3) {
        permissions.push(menu.permission);
      }
    }
  };
  _recurseGetPermission(userMenus);
  return permissions;
}

export { firstMenu };
