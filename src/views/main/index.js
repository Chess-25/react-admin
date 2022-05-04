import React, { memo, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import store from "@/store";

import { MainWrapper } from "./style";

import NavMenu from "@/components/navMenu";
import Bread from "@/components/breadcrumb";
import TagsView from "@/components/tagsView"

import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

const Home = memo((props) => {
  const { route } = props;
  let [collapsed,setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  };
  useEffect(()=>{
    console.log(renderRoutes);
  },[])// eslint-disable-line
  return (
    <MainWrapper>
      <Layout>
        <Sider className="sider" collapsed={collapsed}>
          <div className="logo"><img src={require("@/assets/img/logo.png")} alt="logo"/>
          {!collapsed&&'React-Admin'}
          </div>
          <NavMenu collapsed={collapsed}/>
        </Sider>
        <Layout>
          <Header className="header">
            <Bread toggle={toggle}/>
          </Header>
          <TagsView/>
          <Content className="content">
            <Provider store={store}>
              <HashRouter>
                {renderRoutes(route.routes)}
              </HashRouter>
            </Provider></Content>
        </Layout>
      </Layout>
    </MainWrapper>
  );
});

export default Home;
