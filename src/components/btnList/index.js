import React, { memo } from 'react'

import { OperateBtnsWrapper } from './style'

import {  Button } from 'antd';
import 'moment/locale/zh-cn';//国际化改中文

const OperateBtns = memo((props) => {

  const {btnList} = props

  const clickFn = (clickFn)=>{
    const {operateBn} = props
    operateBn(clickFn)
  }
  return (
    <OperateBtnsWrapper>
      {btnList.map(item=>
        <Button key={item.text} className={item.type} icon={item.icon} htmlType="button" onClick={e=>clickFn(item.clickFn)}>
          {item.text}
        </Button>
      )}
    </OperateBtnsWrapper>
  )
})

export default OperateBtns