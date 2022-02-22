import { IBreadcrumb } from '@/base-ui/breadcrumb/types'
import { RouteRecordRaw } from 'vue-router'

export let firstMenu: any = null

export function mapMenus(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去默认加载所有的route
  const allRoutes: RouteRecordRaw[] = []
  // require.context 是webpack的东西 true表示递归遍历
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) firstMenu = menu
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routes
}

export function pathMapToMenus(
  userMenus: any[],
  currentPath: string,
  breadcrumb?: any[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenus(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumb?.push({ name: menu.name })
        breadcrumb?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function pathMapToBreadcrumb(
  userMenus: any[],
  currentPath: string
): any {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenus(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function mapMenusToPermission(userMenus: any[]) {
  const permissions: string[] = []
  const _recurseGetPermission = (menus: any) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permissions
}

export function menuMapLeafKeys(menuList: any[]) {
  const leafKeys: number[] = []
  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)
  return leafKeys
}
