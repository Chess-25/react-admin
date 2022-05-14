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
        requiresAuth:true,
      },
      {
        path: "/main/analysis/overview",
        component:Overview,
        requiresAuth:true,
      },
      {
        path: "/main/analysis/dashboard",
        component:Dashboard,
        requiresAuth:true,
      },
      {
        path: "/main/system/user",
        component:User,
        requiresAuth:true,
      },
      {
        path: "/main/system/department",
        component:Department,
        requiresAuth:true,
      },
      {
        path: "/main/system/menu",
        component:Menu,
        requiresAuth:true,
      },
      {
        path: "/main/system/role",
        component:Role,
        requiresAuth:true,
      },
      {
        path: "/main/product/category",
        component:Category,
        requiresAuth:true,
      },
      {
        path: "/main/product/goods",
        component:Goods,
        requiresAuth:true,
      },
      {
        path: "/main/story/chat",
        component:Chat,
        requiresAuth:true,
      },
      {
        path: "/main/story/list",
        component:List,
        requiresAuth:true,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    requiresAuth:false,
  },
  {
    path: "/404",
    component: NotFound,
    requiresAuth:true,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    requiresAuth:true,
  },
  {
    path: "/:pathMatch(.*)*/:pathMatch(.*)*",
    component: NotFound,
    requiresAuth:true,
  },
];

export default routes;
