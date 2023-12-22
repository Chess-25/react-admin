import React, { memo, useEffect, useState } from 'react';
import { UserWrapper } from "./style";
// 组件
import { Table, Spin } from 'antd';
import BtnList from "@/components/btnList";
import PageModal from "@/components/pageModal";
import { EyeOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
/* 配置 */
import { contentConfig } from "./config/content";
import { modalConfig } from "./config/modal";

import { useLocation } from "react-router-dom";

import { getList, addUser, editUser, deUser } from '@/service/main/user'

const User = memo(() => {
  const location = useLocation()

  const columns = [
    { title: "操作", key: 'operate',width: 200, fixed: 'left',align: 'center',icon:<EditOutlined/>,
      render: row => {
        return <div className='table-btn'>
          <span className='detail' onClick={()=>operateBn('detail',row)}><EyeOutlined />详情</span>
          <span className='edit' onClick={()=>operateBn('edit',row)}><EyeOutlined />编辑</span>
          <span className='delete' onClick={()=>operateBn('delete',row)}><DeleteOutlined />删除</span>
        </div>
      },
    },
    { title: "用户头像", width: 70,dataIndex: 'avatar',align: 'center',key: 'avatar',
        render: row => {
          return <img className='image' src={row} alt=''/>
        },
    },
    { title: "用户名", width: 100 ,dataIndex: 'username',key: 'username',align: 'center',ellipsis: true,search:'input',},
    { title: "真实姓名", width: 80 ,dataIndex: 'realname',key: 'realname',align: 'center',ellipsis: true},
    { title: "部门", width: 70 ,dataIndex: 'depName',key: 'depName',align: 'center',ellipsis: true},
    { title: "岗位", width: 70 ,dataIndex: 'postName',key: 'postName',align: 'center',ellipsis: true},
    { title: "手机号码", width: 100 ,dataIndex: 'cellphone',key:'cellphone',ellipsis: true},
    { title: "状态", width: 100, dataIndex:'status',align: 'center',key:'status',ellipsis: true,search:'dropdown',
      render: row => {
        return <span>{row ? '启用' : '禁用' }</span>
      },
      filters: [
        {
          text: '全部',
          value: '全部',
        },
        {
          text: '启用',
          value: '1',
        },
        {
          text: '禁用',
          value: '0',
        },
      ],
      // onFilter: (value, record) => record.status.indexOf(value) === 0,
      // filterSearch: true,
    },
    { title: "创建时间",width: 150,dataIndex:'createAt',key:'createAt',ellipsis: true,
      sorter: {compare: (a, b) => a.createAt - b.createAt ? 1 : -1,multiple: 1,}
    },
    { title: "更新时间",width: 150,dataIndex:'updateAt',key:'updateAt',ellipsis: true,
      sorter: {compare: (a, b) => a.updateAt - b.updateAt ? 1 : -1,multiple: 1,}
    },
  ]
  let [tableList,setTableList] = useState([])
  let [loading,setLoading] = useState(true)
  const getUserList = ()=> {
    setLoading(true)
    getList().then(res=>{
      if (res.success) {
        setTableList(res.data)
      }
      setTimeout(()=>{
        setLoading(false)
      },500)
    })
  }
  let [tableForm,setTableForm] = useState({type:'',form:modalConfig,modalVisible:false,formData:{}})
  const operateBn = (clickFn,data)=>{
    console.log(clickFn,6);
    switch (clickFn) {
      case "search":
        getUserList()
        break;
      case "add":
        setTableForm({type:clickFn,form:modalConfig,modalVisible:true,formData:{}})
        break;
      case "edit":
        setTableForm({type:clickFn,form:modalConfig,modalVisible:true,formData:data})
        break;
      case "delete":
        deUserClick(data.id)
        break
      case "detail":
        setTableForm({type:clickFn,form:modalConfig,modalVisible:true,formData:data})
        break
      default:
        console.log(clickFn);
        break;
    }
  }
  //modal传来的数据操作
  const deUserClick = (id)=>{
    deUser({id: id}).then(res=>{
      if (res.success) {
        getUserList()
      }
    })
  }
  const modalClick = (type,data)=>{
    console.log(type,data);
    if (type === 'back') {
      setTableForm({modalVisible:false})
    }
    if (type === 'add') {
      data.avatar = 'http://s3.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_560x999.jpg'
      addUser(data).then(res=>{
        if (res.success) {
          setTableForm({modalVisible:false})
          getUserList()
        }
      })
    }
    if (type === 'edit') {
      editUser(data).then(res=>{
        if (res.success) {
          setTableForm({modalVisible:false})
          getUserList()
        }
      })
    }
  }
  useEffect(()=>{
    getUserList()
  },[])// eslint-disable-line
  return (
    <UserWrapper hidden={location.pathname!=='/main/system/user'}>
      <div className='search'>
        <BtnList btnList={contentConfig.operateList} operateBn={clickFn=>operateBn(clickFn)}/>
      </div>
      <Spin spinning={loading}>
        <Table dataSource={tableList} rowKey={row => row.id } columns={columns} bordered scroll={{ x: 'calc(500px + 50%)', y: 410 }}/>
      </Spin>
      {/* 操作弹窗 */}
      {tableForm.modalVisible&&<PageModal modalConfig={modalConfig} tableForm={tableForm} modalClick={(type,data)=>modalClick(type,data)}/>}
    </UserWrapper>
  );
});

export default User;