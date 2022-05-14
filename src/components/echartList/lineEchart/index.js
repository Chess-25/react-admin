import React, { memo } from 'react'

import MyEcharts from '@/components/echart';
const LineEchart = memo((props) => {

  const {lineData} = props
  let option = {
    tooltip: {},
    xAxis: {
      type:'category',
      data: lineData.xAxisData
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: '销量',
        type: 'line',
        data: lineData.seriesData,
      }
    ]
  }
  return (
    <div><MyEcharts option={option}/></div>
  )
})

export default LineEchart