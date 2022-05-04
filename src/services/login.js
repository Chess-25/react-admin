import request from "./request";

const LoginAPI = {
  Home:"/home/multidata",
  AccountLogin: "/login",
  UserInfo: "/users/", // 用法: /users/1
  UserMenus: "/role/", // 用法: role/1/menu
};

export function getHome() {
  return request({
    url: LoginAPI.Home,
  });
}

/* 用户登陆接口 */
export function accountLogin(account) {
  return request({
    url: LoginAPI.AccountLogin,
    data: account,
  });
}

/* 获取用户信息 */
export function getUserInfoById(id) {
  return request({
    url: LoginAPI.UserInfo + id,
    showLoading: false,
  });
}

/* 获取用户的菜单权限 */
export function getUserMenuByRoleId(id) {
  return request({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading: false,
  });
}
