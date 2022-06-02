import React, { memo, useEffect, useState } from 'react'
import { MyTableWrapper } from "./style";

import { Table,Form,Select,Input,DatePicker, Spin,message,Menu,Dropdown,Space} from 'antd';

import locale from 'antd/es/date-picker/locale/zh_CN';//国际化改中文
import 'moment/locale/zh-cn';//国际化改中文
import BtnList from "@/components/btnList";
import PageModal from "@/components/pageModal";

import { tableOp } from '@/service/tableData'

const { Column } = Table;

const MyTable = memo((props) => {

  const {contentConfig,modalConfig} = props
  let [tableList,setTableList] = useState([{key:1}])
  let [initialData,setInitialData] = useState([])
  let [loading,setLoading] = useState(true)

  const getData = (opType,listType,data)=>{
    setLoading(true)
    tableOp(opType,listType,data).then(res=>{
      if (res.success) {
        for(let item of res.data) {
          item.key = item.iid || item.id
          item.goodsName = item.goodsName || item.title
          item.img = item.img || 'http://s11.mogucdn.com/mlcdn/c45406/180815_8fjggaaj4kd3ih9kjd956kl14f483_640x840.jpg_560x999.jpg'
          item.status = item.status || '启用'
          item.createAt = item.createAt || '2014-12-24 23:12:00'
          item.updateAt = item.updateAt || '2016-12-24 23:12:00'
        }
        setTableForm({modalVisible:false})
        setInitialData(JSON.parse(JSON.stringify(res.data)))
        setTableList(JSON.parse(JSON.stringify(res.data)))
      }else{
        console.log(res.message);
      }
    })
    setTimeout(()=>{
      setLoading(false)
    },500)
  }
  useEffect(()=>{
    getData('total',contentConfig.type)
  },[])// eslint-disable-line
  let [batch,setBatch] = useState([])
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setBatch(selectedRowKeys)
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
  const title = (list)=>{ return( 
    <div className='table-title'>
      <div>{list.title}</div>
      {/* 是否带有搜索功能 */}
      {list.search&&<Form form={form} initialValues={{status:"全部"}} name="search" style={{height:'30px'}}>
        {list.search==='input'&&<Form.Item name={list.key}>
          <Input size="small"/>
        </Form.Item>}
        {list.search==='dropdown'&&<Form.Item name={list.key} >
          <Dropdown trigger={['click']} overlay={
            <Menu style={{textAlign: 'center'}}>
              {list.filters.map(option=>{
                return(
                  <Menu.Item key={option.value} onClick={e=>onFilter(option.value)}>
                    <div >
                      {option.text}
                    </div>
                  </Menu.Item>
                )
              })}
            </Menu>
          }>
            <Space>
              <Input style={{textAlign: 'center'}} size="small" value={status}/>
            </Space>
          </Dropdown>
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
  )}
  let [status,setStatus] = useState('全部')
  const onFilter = (value)=> {
    setStatus(value)
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
  }
  const [date, setDate] = useState([]);//设置时间搜索框
  let [tableForm,setTableForm] = useState({type:'',form:modalConfig,modalVisible:false,formData:{}})
  //表单按钮功能
  const operateBn = (clickFn,data)=>{
    switch (clickFn) {
      case "downLoad":
        console.log(clickFn,form.getFieldsValue());
        break;
      case "reset":
        form.resetFields()
        setDate([])
        getData('total',contentConfig.type)
        setTableList(JSON.parse(JSON.stringify(initialData)))
        break;
      case "add":
        setTableForm({type:clickFn,form:modalConfig,modalVisible:true,formData:{}})
        break;
        case "detail":
        setTableForm({type:clickFn,form:modalConfig,modalVisible:true,formData:data})
        break
      case "delete":
        getData(clickFn,contentConfig.type,data)
        console.log(clickFn,data);
        break;
      case "batch_delete":
        if (batch.length>0) {
          getData(clickFn,contentConfig.type,batch)
        }else{
          message.error('请先选择要删除的数据')
        }
        break;
      default:
        console.log(clickFn,form.getFieldsValue());
        break;
    }
    if (date.length>0) {
      console.log(date[0]._d);
    }
  }

  //modal传来的数据操作
  const modalClick = (type,data)=>{
    getData(type,contentConfig.type,data)
  }
  return (
    <MyTableWrapper>
      <div className='search'>
        <BtnList btnList={contentConfig.operateList} operateBn={clickFn=>operateBn(clickFn)}/>
        <div className="date-picker">创建时间：<DatePicker.RangePicker  value={date} locale={locale} onChange={val => setDate(val)}/></div>
      </div>
      <Spin spinning={loading}>
      <Table dataSource={tableList} rowSelection={{type: 'checkbox',...rowSelection,}} onChange={filter} bordered scroll={{ x: 'calc(500px + 50%)', y: 410 }}>
        {contentConfig.propList.map((list)=>
          <Column key={list.key} title={title(list)} align={list.align} width={list.width||list.operateBtns.length*50} fixed={list.fixed} ellipsis={list.ellipsis} sorter={list.sorter}
            render={(data)=>(
              (list.key==='operate'&&<div className='table-btn'>
                {/* getPopupContainer={(triggerNode) => triggerNode.parentNode} */}
                {list.operateBtns.map(item=>
                  <span key={item.text} className={item.type} onClick={e=>operateBn(item.type,data)}>{item.icon}{item.text}</span>
                )}
              </div>)||
              (list.key==='img'&&<img className='image' src={data[list.key]} alt=''/>)||
              (<span>{data[list.key]}</span>)
            )}
          />
        )}
      </Table>
      </Spin>
      {/* 操作弹窗 */}
      {tableForm.modalVisible&&<PageModal modalConfig={modalConfig} tableForm={tableForm} modalClick={(type,data)=>modalClick(type,data)}/>}
    </MyTableWrapper>
  )
})

export default MyTable