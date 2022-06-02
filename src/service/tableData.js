import { chhRequest } from "@/service/index"

export function getTableData(type,cate,page) {
  return chhRequest.get({
    url: "/tableData",
    params: {
      type,
      cate,
      page
    }
  })
}

export function tableOp(opType,listType,data) {
  return chhRequest.post({
    url: "/table/operate",
    data,
    params:{
      opType,
      listType,
    }
  })
}
// export function tableAdd(type,data) {
//   return chhRequest.post({
//     url: "/table/add",
//     params:{
//       type,
//       data:data
//     },
//     data:data
//   })
// }
