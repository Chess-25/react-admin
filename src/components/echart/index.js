import React, { memo, useEffect, useRef } from 'react'

import { MyEchartsWrapper } from './style'

import * as echarts from 'echarts';
import chinaMapData from "./data/china.json";

const myEcharts = memo((props) => {
  const {option} = props

  const baseEchartRef = useRef(null)

  const initEchart = ()=>{
    echarts.registerMap("china", chinaMapData);
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(baseEchartRef.current);
    // 绘制图表
    myChart.setOption(option);
    // 监听window尺寸的变化
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  }
  useEffect(()=>{
    setTimeout(() => {
      initEchart()
    });
  },[])// eslint-disable-line
  return (
    <MyEchartsWrapper>
      <div ref={baseEchartRef} style={{width:'100%', height: 300 }}></div>
    </MyEchartsWrapper>
  )
})

export default myEcharts