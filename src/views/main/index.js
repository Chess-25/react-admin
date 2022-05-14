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
// import { useHistory,useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Home = memo((props) => {
  const { route } = props;
  // const location = useLocation()
  // const history = useHistory()
  // if (route.routes.findIndex(item=>item.path===location.pathname)===-1) {
  //   history.push('/404')
  // }
  const location = useLocation()
  const routeIndex = route.routes.findIndex(item=>item.path ===location.pathname)
  const authed=localCache.getCache("token")
  let [collapsed,setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  };
  useEffect(()=>{
   
  },[])// eslint-disable-line
  return (
    <MainWrapper>
      {routeIndex===-1&&authed?<NotFound/>:
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
