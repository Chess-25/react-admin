import React, { memo, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { tagsListAction } from "@/store/menu/actionCreaters"
// import { menuListAction } from "@/store/menu/actionCreaters";
// import {getHome} from '@/services/login'
import { mapToMenuRoutes,pathMapBreadcrumbs } from "@/utils/mapMenus"

import { MenuWrapper } from "./style";

import { Menu} from "antd";
import {
  AppstoreOutlined,
} from "@ant-design/icons";

const NavMenu = memo((props) => {
  const {collapsed}=props
  const { menuList,tagsList } = useSelector((state) => ({
    menuList: JSON.parse(JSON.stringify(state.menu.menuList)),
    tagsList: JSON.parse(JSON.stringify(state.menu.tagsList)),
  }),shallowEqual);
  const dispatch = useDispatch();
  useEffect(()=>{
    // getHome().then(res=>{
    //   dispatch(menuListAction(res.data.menu))
    //   console.log(1,menuList);
    // })
  },[])// eslint-disable-line
  const history = useHistory()
  const location = useLocation()
  const routes = mapToMenuRoutes(menuList)

  let bread = [{id:'11'},{id:'11'}]
  //选中menu对应的bread
  const routesIndex = routes.findIndex(tag => tag.path === location.pathname)
  if (location.pathname!=='/main/home' && routesIndex!==-1) {
    bread = pathMapBreadcrumbs(menuList, location.pathname)
    // console.log(5,menuList, location.pathname,bread);
    const tagIndex = tagsList.findIndex(tag => tag.name === bread[1].name)
    if (tagIndex===-1) {
      tagsList.push({name:bread[1].name,path:location.pathname})
      dispatch(tagsListAction(tagsList))
    }
  }
  let breadcrumbs = bread
  
  const menuClick = (item)=>{
    const tagIndex = tagsList.findIndex(tag => tag.name === item.label)
    if (tagIndex===-1) {
      tagsList.push({name:item.label,path:item.url})
      dispatch(tagsListAction(tagsList))
    }
    history.push(item.url)
  }
  useEffect(()=>{
    
  },[location])// eslint-disable-line
  return (
    <MenuWrapper>
      <div className="menu">
        {/* ant 4.20.0之前的用法 */}
        <div className={"logo " + (collapsed?"active":"")}><img src={require("@/assets/img/logo.png")} alt="logo"/>
          {!collapsed&&<span>React-Admin</span>}
          </div>
        <Menu defaultOpenKeys={[breadcrumbs[0].id]} defaultSelectedKeys={[breadcrumbs[1].id]} selectedKeys={[breadcrumbs[1].id]} mode="inline" theme="dark">
          {menuList.map(list=>{
            return(
              list.children.length===0?<Menu.Item key={list.key} onClick={e=>menuClick(list)} icon={<AppstoreOutlined/>}>{list.label}</Menu.Item>:
              <Menu.SubMenu key={list.key} title={list.label} icon={<AppstoreOutlined />}  className={"sub-menu " + (breadcrumbs[0].id===list.id?"active":"")} >
                {list.children.map(item=>{
                  return(
                    <Menu.Item key={item.key} onClick={e=>menuClick(item)}>{item.label}</Menu.Item>
                  )
                })}
              </Menu.SubMenu>
            )
          })}
        </Menu>
        {/* ant 4.20.0之后的用法 */}
        {/* <Menu defaultSelectedKeys={["1-1"]}
              defaultOpenKeys={["1"]}
              onClick={menuClick}
              mode="inline"
              theme="dark"
              items={menuList}>
        </Menu> */}
      </div>
    </MenuWrapper>
  );
});

export default NavMenu;
