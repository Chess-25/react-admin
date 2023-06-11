import React, { memo, useEffect, useState, useRef } from "react";

import { DashboardWrapper } from "./style";

import { Card, Col, Row } from "antd";

import {
  BarEchart,
  LineEchart,
  MapEchart,
  PieEchart,
  RoseEchart,
} from "@/components/echartList";

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
import html2canvas from "html2canvas";

const Dashboard = memo(() => {
  let [statisticData, setStatisticData] = useState({});
  async function getGoodsStatistics() {
    const statisticResult = await API.getGoodsStatistics();
    setStatisticData(statisticResult);
  }

  const snapshot_ref = useRef(null);
  let [snapshotUrl, setSnapshotUrl] = useState(null);
  // 任务流程截图
  const toImage = () => {
    // 获取父标签，意思是这个标签内的 DOM 元素生成图片
    // task_edit_ref是给截图范围内的父级元素自定义的ref名称
    const canvasBox = snapshot_ref.current;
    const scale = 1;
    console.log(canvasBox,canvasBox.current);
    // 手动创建一个 canvas 标签
    let canvas = document.createElement("canvas");

    if (canvasBox) {
      // 获取父级的宽高
      // const width = 236//自定义宽度
      // const height = 110//自定义高度
      const width = canvasBox.clientWidth; //根据组件大小获取宽
      const height = canvasBox.clientHeight; //根据组件大小获取高
      canvas.width = width * scale;
      canvas.height = height * scale;
      // canvas.getContext("2d").scale(0.19, 0.15);//调整截图后的图片大小
      canvas.getContext("2d").scale(1, 1); //调整截图后的图片大小
      const options = {
        backgroundColor: null, // 设置背景色为透明
        canvas: canvas,
        useCORS: true, //是否尝试使用CORS从服务器加载图像，解决跨域问题
        tainttest: true, // 是否在渲染前测试图片
        logging: false, // 不启动日志调试
        scrollY: 0, //防止滚动偏移
        scrollX: 0, //防止滚动偏移
      };
      // canvasBox是要截图的元素，options是一些相关配置
      html2canvas(canvasBox, options).then((canvas) => {
        // toDataURL 图片格式转成 base64
        let snapshot = canvas.toDataURL("image/jpeg", 0.5); //图片格式转为jpeg压缩图片清晰度
        // let snapshot = canvas.toDataURL("image/png", 0.5)
        if (snapshot) {
          //截图信息上传
          setSnapshotUrl(snapshot)
          console.log(snapshot);
        }
      });
    }
  };
  useEffect(() => {
    getGoodsStatistics();
  }, []); // eslint-disable-line
  return Object.keys(statisticData).length > 0 ? (
    <DashboardWrapper>
      <div onClick={toImage} className="snapshot">点击截图</div>
      <img src={snapshotUrl} alt=""/>
      <Row gutter={[10]} className="top-row">
        <Col span={8}>
          <Card title="数据统计" bordered={false}>
            <PieEchart pieData={statisticData.statistic} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="全国城市商品销量" bordered={false} ref={snapshot_ref}>
            <MapEchart mapData={statisticData.addressGoodSale} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="分类商品数量(玫瑰图)" bordered={false}>
            <RoseEchart roseData={statisticData.categoryGoods} />
          </Card>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={12}>
          <Card title="分类商品的销量" bordered={false}>
            <LineEchart lineData={statisticData.categoryGoodSale} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="分类商品收藏" bordered={false}>
            <BarEchart barData={statisticData.categoryGoodFaver} />
          </Card>
        </Col>
      </Row>
    </DashboardWrapper>
  ) : null;
});

export default Dashboard;
