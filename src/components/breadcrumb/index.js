import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { BreadcrumbWrapper } from "./style"

import { pathMapBreadcrumbs } from "@/utils/mapMenus"

import { Breadcrumb} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const Bread = memo((props) => {
  const { menuList } = useSelector((state) => ({
    menuList: JSON.parse(JSON.stringify(state.menu.menuList)),
  }),shallowEqual);
  const location = useLocation()
  let [breadcrumbs,setBreadcrumbs] = useState(pathMapBreadcrumbs(menuList, location.pathname))
  let [collapsed,setCollapsed] = useState(false)
  const toggle = () => {
    const {toggle} =props
    setCollapsed(!collapsed)
    toggle(collapsed)
  };
  useEffect(()=>{
    setBreadcrumbs(pathMapBreadcrumbs(menuList, location.pathname))
  },[location])// eslint-disable-line
  return (
    <BreadcrumbWrapper>
      <div className="bread-left">
        <div className="trigger" onClick={toggle}>{collapsed?<MenuUnfoldOutlined />:<MenuFoldOutlined/>}</div>
        <Breadcrumb>
          {breadcrumbs.length>0?breadcrumbs.map((item) => {
            return <Breadcrumb.Item key={item.name}>{item.name}</Breadcrumb.Item>;
          }):<Breadcrumb.Item>首页</Breadcrumb.Item>}
        </Breadcrumb>
      </div>
    </BreadcrumbWrapper>
  );
});

export default Bread;
