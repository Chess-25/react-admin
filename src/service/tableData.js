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