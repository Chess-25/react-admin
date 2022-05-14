import React, { memo, useEffect, useState } from 'react'
import { MyTableWrapper } from "./style";

import { Table,Form,Select,Input,DatePicker } from 'antd';

import locale from 'antd/es/date-picker/locale/zh_CN';//国际化改中文
import 'moment/locale/zh-cn';//国际化改中文
import BtnList from "@/components/btnList";
import PageModal from "@/components/pageModal";

import { getTableData } from '@/service/tableData'

const { Column } = Table;

const MyTable = memo((props) => {

  const {contentConfig,modalConfig} = props
  let [tableList,setTableList] = useState([{key:1}])
  let [initialData,setInitialData] = useState([])
  const getData = ()=>{
    getTableData(contentConfig.type,'coat',1).then(res=>{
      for(let item of res.data.list) {
        item.key = item.iid || item.id
        item.goodsName = item.goodsName || item.title
        item.img =  item.img || item.show.img
        item.status = item.status || '启用'
        item.createAt = item.createAt || '2014-12-24 23:12:00'
        item.updateAt = item.updateAt || '2016-12-24 23:12:00'
      }
      setInitialData(JSON.parse(JSON.stringify(res.data.list)))
      setTableList(JSON.parse(JSON.stringify(res.data.list)))
    })
  }
  useEffect(()=>{
    getData()
  },[])// eslint-disable-line
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  }
  
  //选择数据
  function filter(pagination, filters, sorter, extra) {
    // console.log('params', pagination, filters, sorter, extra);
  } 
  //列表标题设置
  const [form] = Form.useForm();
  const title = (list)=>{
    return <div className='table-title'>
              <div>{list.title}</div>
              {/* 是否带有搜索功能 */}
              {list.search&&<Form form={form} initialValues={{status:"全部"}} name="search" style={{height:'30px'}}>
                {list.search==='input'&&<Form.Item name={list.key}>
                  <Input size="small"/>
                </Form.Item>}
                {list.search==='select'&&<Form.Item name={list.key} >
                  <Select size="small" onChange={onFilter}>
                    {list.filters.map(option=>{
                      return(
                        <Select.Option key={option.value} value={option.value}>{option.text}</Select.Option>
                      )
                    })}
                  </Select>
                </Form.Item>}
              </Form>}
            </div>
  }
  const tableBn = (data,type)=>{
    console.log(data,type);
  }
  const onFilter = (value)=> {
    let arr = []
    if (value ==='全部') {
      arr = JSON.parse(JSON.stringify(initialData))
    }else{
      for(let item of initialData) {
        if (item.status ===value) {
          arr.push(item)
        }
      }
    }
    setTableList(arr)
    console.log(1,initialData);
  }
  const [date, setDate] = useState([]);//设置时间搜索框
  let [formType,setFormType] = useState({})
  //表单按钮功能
  const operateBn = (clickFn)=>{
    switch (clickFn) {
      case "downLoad":
        console.log(clickFn,form.getFieldsValue());
        break;
      case "reset":
        form.resetFields()
        setDate([])
        break;
      case "add":
        setFormType({type:'add',title:contentConfig.type,list:[]})
        console.log(clickFn,form.getFieldsValue());
        break;
      case "delete":
        console.log(clickFn,form.getFieldsValue());
        break;
      default:
        console.log(clickFn,form.getFieldsValue());
        break;
    }
    if (date.length>0) {
      console.log(date[0]._d);
    }
  }
  return (
    <MyTableWrapper>
      <div className='search'>
        <BtnList btnList={contentConfig.operateList} operateBn={clickFn=>operateBn(clickFn)}/>
        <div className="date-picker">创建时间：<DatePicker.RangePicker  value={date} locale={locale} onChange={val => setDate(val)}/></div>
      </div>
      <Table dataSource={tableList} rowSelection={{type: 'checkbox',...rowSelection,}} onChange={filter} bordered scroll={{ x: 'calc(500px + 50%)', y: 410 }}>
        {contentConfig.propList.map((list)=>
          <Column key={list.key} title={title(list)} align={list.align} width={list.width||list.operateBtns.length*50} fixed={list.fixed} ellipsis={list.ellipsis} sorter={list.sorter}
            render={(data)=>(
              (list.key==='operate'&&<div className='table-btn'>
                {list.operateBtns.map(item=>
                  <span key={item.text} className={item.type} onClick={e=>tableBn(data,item.type)}>{item.icon}{item.text}</span>
                )}
              </div>)||
              (list.key==='img'&&<img className='image' src={data[list.key]} alt=''/>)||
              (<span>{data[list.key]}</span>)
            )}
          />
        )}
      </Table>
      <PageModal modalConfig={modalConfig} formType={formType}/>
    </MyTableWrapper>
  )
})

export default MyTable