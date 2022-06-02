import React, { memo, useEffect, useState} from 'react';

import {DashboardWrapper} from "./style"

import { Card, Col, Row } from 'antd';

import { 
  BarEchart,
  LineEchart,
  MapEchart,
  PieEchart,
  RoseEchart
} from '@/components/echartList'

//静态导入echart数据
// import {
//   statisticData,
//   addressGoodSaleData,
//   categoryGoodsData,
//   categoryGoodSaleData,
//   categoryGoodFaverData
// } from './echartData'

//从接口获取echart数据
import * as API from "@/service/main/analysis/dashboard";


const Dashboard = memo(() => {

  let [statisticData,setStatisticData] = useState({})
  async function getGoodsStatistics() {
    const statisticResult = await API.getGoodsStatistics();
    setStatisticData(statisticResult)
  }
  useEffect(()=>{
    getGoodsStatistics()
  },[])// eslint-disable-line
  return (
    Object.keys(statisticData).length>0?
    <DashboardWrapper>
      <Row gutter={[10]} className='top-row'>
        <Col span={8}>
          <Card title="数据统计" bordered={false}>
            <PieEchart pieData={statisticData.statistic}/>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="全国城市商品销量" bordered={false}>
            <MapEchart mapData={statisticData.addressGoodSale}/>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="分类商品数量(玫瑰图)" bordered={false}>
            <RoseEchart roseData={statisticData.categoryGoods}/>
          </Card>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={12}>
          <Card title="分类商品的销量" bordered={false}>
            <LineEchart lineData={statisticData.categoryGoodSale}/>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="分类商品收藏" bordered={false}>
            <BarEchart barData={statisticData.categoryGoodFaver}/>
          </Card>
        </Col>
      </Row>
    </DashboardWrapper>:null
  );
});

export default Dashboard;