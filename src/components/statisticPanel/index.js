import React, { memo } from 'react'

import { Card,Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {StatisticPanelWrapper} from  './style'

const StatisticPanel = memo((props) => {
  const {panelData} = props
  return (
    <StatisticPanelWrapper>
      <Card>
        <div className="header">
          <span>{ panelData.name }</span>
          <Tooltip title={panelData.tips} placement="top">
            <ExclamationCircleOutlined />
          </Tooltip>
        </div>
        <div>
        { panelData.name }￥{panelData.value}
        </div>
        <div>
        { panelData.name }￥{panelData.value}
        </div>
      </Card>
    </StatisticPanelWrapper>
  )
})

export default StatisticPanel