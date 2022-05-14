import React, { memo } from 'react'

import MyEcharts from '@/components/echart';
const RoseEchart = memo((props) => {

  const {roseData} = props
  let option =  {
    legend: {
      top: "bottom"
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "面积模式",
        type: "pie",
        radius: [10, 120],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        data: roseData
      }
    ]
  };
  return (
    <div><MyEcharts option={option}/></div>
  )
})

export default RoseEchart