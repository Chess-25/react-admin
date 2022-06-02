import React, { memo, useEffect, useState } from "react";
import { Provider } from "react-redux";

// import { renderRoutes } from "react-router-config";

import { HashRouter } from "react-router-dom";
import store from "@/store";

import { MainWrapper } from "./style";

import NavMenu from "@/components/navMenu";
import Bread from "@/components/breadcrumb";
import TagsView from "@/components/tagsView"
import UserInfo from "@/components/userInfo";

import NotFound from "../notFound";
import localCache from "@/utils/cache"

import { Layout } from "antd";

import renderRoutes from '@/utils/renderRoutes';
import { useLocation } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
// import { useHistory,useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Home = memo((props) => {
  const { menuList } = useSelector((state) => ({
    menuList: JSON.parse(JSON.stringify(state.menu.menuList)),
  }),shallowEqual);
  let arr = []
  for (const menu of menuList) {
    if (menu.children.length===0) {
      arr.push(menu)
    }else{
      for (const item of menu.children) {
        arr.push(item)
      }
    }
  }
  const { route } = props;
  // const location = useLocation()
  // const history = useHistory()
  // if (route.routes.findIndex(item=>item.path===location.pathname)===-1) {
  //   history.push('/404')
  // }
  const location = useLocation()
  const arrIndex = arr.findIndex(item=>item.url ===location.pathname)//查看权限里是否有该页面若没有则跳转404
  // const routeIndex = route.routes.findIndex(item=>item.path ===location.pathname)

  const authed=localCache.getCache("token")
  let [collapsed,setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  };
  useEffect(()=>{

  },[])// eslint-disable-line
  return (
    <MainWrapper>
      {arrIndex===-1&&authed?<NotFound/>:
      <Layout>
        <Sider className="sider" width={200} collapsed={collapsed}>
          <NavMenu collapsed={collapsed}/>
        </Sider>
        <Layout>
          <Header className="header">
            <Bread toggle={toggle}/><UserInfo/>
          </Header>
          <TagsView/>
          <Content className="content">
            <Provider store={store}>
              <HashRouter>
                {renderRoutes(route.routes)}
              </HashRouter>
            </Provider>
          </Content>
        </Layout>
      </Layout>
      }
    </MainWrapper>
  );
});

export default Home;
