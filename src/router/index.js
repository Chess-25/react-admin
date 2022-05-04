import Main from "@/views/main";
import Home from "@/views/main/home";
import Overview from "@/views/main/analysis/overview";
import Dashboard from "@/views/main/analysis/dashboard";
import User from "@/views/main/system/user";
import Department from "@/views/main/system/department";
import Menu from "@/views/main/system/menu";
import Role from "@/views/main/system/role";
import Category from "@/views/main/product/category";
import Goods from "@/views/main/product/goods";
import Chat from "@/views/main/story/chat";
import List from "@/views/main/story/list";

import Login from "@/views/login";
import NotFound from "@/views/notFound";

import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/main/home" />,
  },
  {
    path: "/main",
    component: Main,
    routes: [
      {
        path: "/main",
        exact: true,
        render: () => <Redirect to="/main/home" />,
      },
      {
        path: "/main/home",
        component:Home,
      },
      {
        path: "/main/analysis/overview",
        component:Overview,
      },
      {
        path: "/main/analysis/dashboard",
        component:Dashboard,
      },
      {
        path: "/main/system/user",
        component:User,
      },
      {
        path: "/main/system/department",
        component:Department,
      },
      {
        path: "/main/system/menu",
        component:Menu,
      },
      {
        path: "/main/system/role",
        component:Role,
      },
      {
        path: "/main/product/category",
        component:Category,
      },
      {
        path: "/main/product/goods",
        component:Goods,
      },
      {
        path: "/main/story/chat",
        component:Chat,
      },
      {
        path: "/main/story/list",
        component:List,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: NotFound,
  },
];

export default routes;
