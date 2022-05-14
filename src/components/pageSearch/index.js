import React, { memo } from 'react'

import { PageSearchWrapper } from './style'

import { Form, Input,DatePicker, Button,Row, Col,Select } from 'antd';

import locale from 'antd/es/date-picker/locale/zh_CN';//国际化改中文
import 'moment/locale/zh-cn';//国际化改中文

const PageSearch = memo((props) => {
  const {searchConfig} = props

  const onFinish = (values)=>{
    console.log(values);
  }
  const [form] = Form.useForm();
  const clickFn = (clickFn)=>{
    switch (clickFn) {
      case "downLoad":
        console.log(form.getFieldsValue());
        break;
      case "reset":
        form.resetFields()
        break;
      case "add":
        console.log(form.getFieldsValue().id);
        break;
      case "delete":
        console.log(form.getFieldsValue());
        break;
      default:
        console.log(form.getFieldsValue());
        break;
    }
  }
  return (
    <PageSearchWrapper>
      <Form form={form} name="search" labelCol={{ span: 6 }} onFinish={onFinish}>
        <Row gutter={[30,5]} style={{width:'90%'}}>
          {searchConfig.formItems.map(item=>{
            return(
              <Col key={item.label} md='3' xxl='4' style={{width:'320px'}}> 
                {item.type==='input'&&<Form.Item label={item.label} name={item.field} >
                  <Input placeholder={item.placeholder}/>
                </Form.Item>}
                {item.type==='select'&&<Form.Item label={item.label} name={item.field} >
                  <Select placeholder={item.placeholder}>
                    {item.options.map(option=>{
                      return(
                        <Select.Option key={option.value} value={option.value}>{option.title}</Select.Option>
                      )
                    })}
                  </Select>
                </Form.Item>}
                {item.type==='datepicker'&&<Form.Item label={item.label} name={item.field}>
                  <DatePicker.RangePicker block locale={locale}/>
                </Form.Item>}
              </Col>
            )
          })}
        </Row>
        <Form.Item className='form-button'>
          {searchConfig.operateBtns.map(item=>
            <Button key={item.text} className={item.type} icon={item.icon} htmlType="button" onClick={e=>clickFn(item.clickFn)}>
              {item.text}
            </Button>
          )}
        </Form.Item>
      </Form>
    </PageSearchWrapper>
  )
})

export default PageSearch