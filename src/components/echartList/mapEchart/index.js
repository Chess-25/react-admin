import React, { memo } from 'react'

import MyEchart from '@/components/echart';
/* 工具库 */
import { convertData } from "../utils/convertData";
const MapEchart = memo((props) => {

  const {mapData} = props
  let option = {
    backgroundColor: "#fff",
    title: {
      text: "全国销量统计",
      left: "center",
      textStyle: {
        color: "#000"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: function(params) {
        return params.name + " : " + params.value[2];
      }
    },
    visualMap: {
      min: 0,
      max: 60000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ["高", "低"],
      inRange: {
        color: [
          "rgb(70, 240, 252)",
          "rgb(250, 220, 46)",
          "rgb(245, 38, 186)"
        ]
      },
      textStyle: {
        color: "#000"
      }
    },
    geo: {
      map: "china",
      roam: "scale",
      emphasis: {
        areaColor: "#f4cccc",
        borderColor: "rgb(9, 54, 95)",
        itemStyle: {
          areaColor: "#f4cccc"
        }
      }
    },
    series: [
      {
        name: "销量",
        type: "scatter",
        coordinateSystem: "geo",
        data: convertData(mapData),
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1
          }
        }
      },
      {
        type: "map",
        map: "china",
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
  };
  return (
    <div><MyEchart option={option}/></div>
  )
})

export default MapEchart