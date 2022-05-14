import React, { memo, useEffect, useState } from 'react'

import { Modal, Button } from 'antd';

const PageModal = memo((props) => {
  const {formType} = props
  const [modalVisible, setmodalVisible] = useState(false);

  const showModal = () => {
    setmodalVisible(true);
  };

  const handleOk = () => {
    setmodalVisible(false);
  };

  const handleCancel = () => {
    setmodalVisible(false);
  };
  useEffect(()=>{
    if (formType.type==='add') {
      setmodalVisible(true)
      console.log(formType);
    }
  },[formType])
  return (
    <div>
      <Modal title={(formType.type==='add'?'新增':'编辑')+formType.title} visible={modalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
})

export default PageModal