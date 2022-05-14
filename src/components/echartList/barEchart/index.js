import React, { memo } from 'react'

import MyEcharts from '@/components/echart';
const BarEchart = memo((props) => {

  const {barData} = props
  let option = {
    // title: {
    //   text: '分类商品收藏',
    //   x: 'center',
    // },
    tooltip: {},
    xAxis: {
      data: barData.xAxisData
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        data: barData.seriesData,
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)"
        }
      }
    ]
  }
  return (
    <div><MyEcharts option={option}/></div>
  )
})

export default BarEchart