import * as actionTypes from "./constants";

import {
  AppstoreOutlined,
  PieChartOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const defaultState = {
  menuList: [
    {
      id:"11",
      key: "11", 
      label: "首页", 
      icon: <AppstoreOutlined />,
      sort: 1,
      type: 1, 
      url: '/main/home',
      children: [ 
        // { key: "11", children: undefined, label: "首页", type: 2 ,url: '/main/home'}
      ],
    },
    { 
      id:"1",
      key: "1", 
      label: "系统总览", 
      icon: <AppstoreOutlined />,
      sort: 1,
      type: 1, 
      url: '/main/analysis',
      children: [
        { key: "1-1", children: undefined, label: "核心技术", type: 2 ,url: '/main/analysis/overview',},
        { key: "1-2", children: undefined, label: "商品统计", type: 2 ,url: '/main/analysis/dashboard',},
      ], 
    },
    { 
      id:"2",
      key: "2", 
      label: "系统管理", 
      icon: <MailOutlined />,
      sort: 2,
      type: 1, 
      url: "/main/system",
      children: [
        { key: "2-1", children: undefined, label: "用户管理", type: 2 ,url: "/main/system/user"},
        { key: "2-2", children: undefined, label: "部门管理", type: 2 ,url: "/main/system/department"},
        { key: "2-3", children: undefined, label: "菜单管理", type: 2 ,url: "/main/system/menu"},
        { key: "2-4", children: undefined, label: "角色管理", type: 2 ,url: "/main/system/role"},
      ], 
    },
    {
      id:"3",
      key: "3",
      label: "商品中心",
      icon: <ContainerOutlined />,
      sort: 3,
      type: 1,
      url: "/main/product",
      children: [
        { key: "3-1", children: undefined, label: "商品类别", type: 2 ,url: "/main/product/category"},
        { key: "3-2", children: undefined, label: "商品信息", type: 2 ,url: "/main/product/goods"},
      ],
    },
    {
      id:"4",
      key: "4",
      label: "随便聊聊",
      icon: <PieChartOutlined />,
      sort: 4,
      type: 1,
      url: "/main/story",
      children: [
        { key: "4-1", children: undefined, label: "你的故事", type: 2 ,url: "/main/story/chat"},
        { key: "4-2", children: undefined, label: "故事列表", type: 2 ,url: "/main/story/list"},
      ],
    },
  ],
  tagsList: [
    {name: '首页', path: '/main/home'},
  ]
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_MENULIST:
      return { ...state, menuList: action.menuList };
    case actionTypes.CHANGE_TAGSLIST:
      return { ...state, tagsList: action.tagsList };
    default:
      return state;
  }
}

export default reducer