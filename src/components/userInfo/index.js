import React, { memo } from 'react'

import { useSelector, shallowEqual } from "react-redux";
import localCache from "@/utils/cache"
import {UserInfobWrapper} from './style'
import {Avatar, Menu, Dropdown, Space } from 'antd';
import { CloseCircleOutlined, SwapOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const UserInfo = memo(() => {
  const { userInfo } = useSelector((state) => ({
    userInfo: state.login.userInfo,
  }),shallowEqual);
  const menu = <Menu style={{width:'100px',textAlign:'center'}}
      items={[
        {label: <div onClick={e=>exit()} ><CloseCircleOutlined />退出登录</div>},
        {label: <div onClick={e=>exit()} ><SwapOutlined />切换用户</div>},
      ]}/>
  const history = useHistory()
  const exit = ()=>{
    localCache.deleteCache("token");
    history.push('/login')
  }
  return (
    <UserInfobWrapper>
       <Dropdown overlay={menu} placement="bottom" arrow>
          <Space className='avatar'>
            <Avatar size={28} src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
            <span>{userInfo.name}</span>
          </Space>
      </Dropdown>
    </UserInfobWrapper>
  )
})

export default UserInfo