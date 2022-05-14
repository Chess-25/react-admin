import React, { memo } from 'react'

import MyEcharts from '@/components/echart';
const PieEchart = memo((props) => {

  const {pieData} = props
  let option = {
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "horizontal",
      left: "left"
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "50%",
        data: pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
  return (
    <div><MyEcharts option={option}/></div>
  )
})

export default PieEchart