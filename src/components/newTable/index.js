import React, { memo, useState, useEffect } from 'react';

import { NewTableWrapper } from "./style"

import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { getTableData } from '@/service/tableData'

const NewTable = memo((props) => {

  const {contentConfig} = props
  let [tableList,setTableList] = useState([{key:'555'},{key:'666'}])
  let [initialData,setInitialData] = useState([])
  const getData = ()=>{
    getTableData('user','coat',1).then(res=>{
      for(let item of res.data.list) {
        item.key = item.iid || item.id
        item.goodsName = item.goodsName || item.title
        item.img =  item.img || item.show.img
        item.status = item.status || '启用'
        item.createAt = item.createAt || '2014-12-24 23:12:00'
        item.updateAt = item.updateAt || '2016-12-24 23:12:00'
      }
      console.log(111,res);
      setInitialData(JSON.parse(JSON.stringify(res.data.list)))
      setTableList(JSON.parse(JSON.stringify(res.data.list)))
    })
  }
  console.log(tableList);
  useEffect(()=>{
    getData()
  },[])// eslint-disable-line
  const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ]}
    />
  );
  const tableBn = (data,type)=>{
    console.log(data,type);
  }
  const operateBn = (clickFn)=>{
    // switch (clickFn) {
    //   case "downLoad":
    //     console.log(clickFn,form.getFieldsValue());
    //     break;
    //   case "reset":
    //     form.resetFields()
    //     setDate([])
    //     break;
    //   case "add":
    //     setFormType({type:'add',title:contentConfig.type,list:[]})
    //     console.log(clickFn,form.getFieldsValue());
    //     break;
    //   case "delete":
    //     console.log(clickFn,form.getFieldsValue());
    //     break;
    //   default:
    //     console.log(clickFn,form.getFieldsValue());
    //     break;
    // }
    // if (date.length>0) {
    //   console.log(date[0]._d);
    // }
  }
  return (
    <NewTableWrapper>
      <div className='table'>  
        {contentConfig.propList.map((column,index)=>{
          return (
            <div key={index} className="table-body">
              <div>
                <div>{column.title}</div>
                <div className='th'>
                  {tableList.length>0&&tableList.map((list,indey)=>{
                    return(
                      <div key={list.key}>
                        {(column.key!=='img'&&column.key!=='operate')&&<span>{list[column.key]}</span>}
                        {column.key==='operate'&&<Dropdown getPopupContainer={triggerNode => {return triggerNode.parentNode}} overlay={
                              <Menu>
                                {column.operateBtns.map(item=>{
                                  return(
                                    <Menu.Item key={item.text}>
                                      <div key={item.text} className={item.type} onClick={e=>tableBn(list,item.type)}>
                                        <Button style={{padding:'4px 0',color:item.color}} type='text' icon={item.icon}>{item.text}</Button>
                                      </div>
                                    </Menu.Item>
                                  )
                                })}
                              </Menu>
                              } placement="bottom" trigger={['click']}>
                                <Button type='primary' icon={list.icon}>操作</Button>
                          </Dropdown>}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* <div>
        <table border="1" className='table'>
          <tbody className='table-body'>
            {tableList.map((list,index)=>{
              return (
                index===0?<tr key={list.key} className="tr">
                  {contentConfig.propList.map(column=>{
                    return (
                      <th key={column.key} style={{minWidth:column.width}}>
                        {column.title}
                      </th>
                    )
                  })}
                </tr>:<tr key={list.key} className="tr">
                  {contentConfig.propList.map((column,indey)=>{
                    return (
                      (column.key==='operate'&&<th key={column.key} className='th' style={{minWidth:column.width}}>
                        <Dropdown getPopupContainer={triggerNode => {return triggerNode.parentNode}} overlay={
                              <Menu>
                                {column.operateBtns.map(item=>{
                                  return(
                                    <Menu.Item key={item.text}>
                                      <div key={item.text} className={item.type} onClick={e=>tableBn(list,item.type)}>
                                        <Button style={{padding:'4px 0',color:item.color}} type='text' icon={item.icon}>{item.text}</Button>
                                      </div>
                                    </Menu.Item>
                                  )
                                })}
                              </Menu>
                              } placement="bottom" trigger={['click']}>
                                <Button type='primary' icon={list.icon}>操作</Button>
                          </Dropdown>
                      </th>)||
                      (column.key==='img'&&<th key={column.key} style={{minWidth:column.width}}>
                        <div className='image'><img src={list[column.key]} alt=''/></div> 
                      </th>)||(<th key={column.key} style={{width:column.width}}><span className='table-data'>{(column.key!=='img'&&column.key!=='operate')&&list[column.key]}</span></th>)
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div> */}
    </NewTableWrapper>
  );
});

export default NewTable;