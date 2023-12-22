import React, { memo, useEffect, useState } from 'react'

import {PageModalWrapper} from './style'

import { Modal, Form, Input,DatePicker, Button,TreeSelect ,Row, Col,Select } from 'antd';

import locale from 'antd/es/date-picker/locale/zh_CN';//国际化改中文
import 'moment/locale/zh-cn';//国际化改中文


const PageModal = memo((props) => {
  const {modalConfig,tableForm} = props
  const [modalVisible, setmodalVisible] = useState(false);

  const handleCancel = () => {
    setmodalVisible(false);
  };
  let [isEdit,setIsEdit] = useState(false)
  const [modalForm] = Form.useForm();
  let [modalTitle,setModalTitle] = useState('')
  useEffect(()=>{
    if (tableForm.type==='add') {
      setModalTitle('新建' + tableForm.form.title)
      modalForm.resetFields();
      setIsEdit(true)
    }
    if (tableForm.type==='edit') {
      setModalTitle('编辑' + tableForm.form.title)
      modalForm.setFieldsValue(tableForm.formData)
      setIsEdit(true)
    }
    if (tableForm.type==='detail') {
      setModalTitle(tableForm.form.title + '详情')
      setIsEdit(false)
      modalForm.setFieldsValue(tableForm.formData)
    }
    setmodalVisible(tableForm.modalVisible)
  },[tableForm])// eslint-disable-line
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [dep, setDep] = useState(undefined);
  const SelectDep = (value) => {
    setDep(value);
  };
  const modalClick = (type)=>{
    const {modalClick} = props
    switch (type) {
      case "edit":
        setIsEdit(true)
        break;
      case "submit":
        modalForm.validateFields().then((errors,values)=>{//form表单校验:获取对应form表单中的映射对应的参数信息
          modalClick(tableForm.type,modalForm.getFieldsValue())
         }).catch(errors => {
          console.log(2,errors);
        });
        break;
      case "back":
        modalClick('back')
        break;
      default:
        setIsEdit(false)
        if (tableForm.type==='add') {
          setmodalVisible(false)
        }
        break;
    }
  }
  return (
    <PageModalWrapper>
      <Modal title={modalTitle} visible={modalVisible} onCancel={handleCancel} maskClosable={false}
        bodyStyle={{MaxHeight:'410px',overflow: 'auto'}}
        footer={[
          isEdit===false&&tableForm.type==='detail'?
          <div key="edit">
            <Button type="primary" key="edit" onClick={e=>modalClick('edit')}>编辑</Button>
            {/* <Button key="back" onClick={e=>modalClick(setmodalVisible(false))}>取消</Button> */}
          </div>:
          <div key='isEdit'>
            <Button type="primary" key="submit" onClick={e=>modalClick('submit')}>提交</Button>
            <Button key="back" onClick={e=>modalClick('back')}>取消</Button>
          </div>
          
        ]}>
        <Form
          name="modalForm"
          form={modalForm}
          labelCol={{span: 8,}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed} 
          autoComplete="new-password">
          <Row gutter={[30,5]} style={{width:'90%'}}>
            {modalConfig.formItems.map(item=>{
              return(
                <Col key={item.label} style={{width:'100%'}}>
                  {/* 隐藏字段 */}
                  {item.type==='hidden'&&<Form.Item hidden={true} label={item.label} name={item.field} rules={modalConfig.rules[item.field]}>
                    <Input placeholder={item.placeholder} disabled={true}/>
                  </Form.Item>}
                  {/* 可编辑字段 */}
                  {item.type==='input'&&<Form.Item label={item.label} name={item.field} rules={modalConfig.rules[item.field]}>
                    <Input placeholder={item.placeholder} disabled={!isEdit}/>
                  </Form.Item>}
                  {item.type==='select'&&<Form.Item label={item.label} name={item.field} rules={modalConfig.rules[item.field]} >
                    <Select placeholder={item.placeholder} disabled={!isEdit}>
                      {item.options.map(option=>{
                        return(
                          <Select.Option key={option.value} value={option.value}>{option.title}</Select.Option>
                        )
                      })}
                    </Select>
                  </Form.Item>}
                  {item.type==='tree'&&<Form.Item label={item.label} name={item.field} rules={modalConfig.rules[item.field]}>
                    <TreeSelect
                      showSearch
                      value={dep}
                      dropdownStyle={{ maxHeight: 200, overflow: 'auto' }}
                      placeholder={item.placeholder}
                      allowClear
                      onChange={SelectDep}
                      treeData={item.options}
                      disabled={!isEdit}
                    >
                    </TreeSelect>
                  </Form.Item>}
                  {item.type==='datepicker'&&<Form.Item label={item.label} name={item.field}>
                    <DatePicker.RangePicker block locale={locale} disabled={!isEdit}/>
                  </Form.Item>}
                </Col>
              )
            })}
          </Row>
        </Form>
      </Modal>
    </PageModalWrapper>
  )
})

export default PageModal