import { chhRequest } from "@/service/index"

export function getList(data) {
  return chhRequest.get({
    url: "/user/list",
    params: data,
  })
}
export function addUser(data) {
  return chhRequest.post({
    url: "/user/add",
    data,
  })
}
export function editUser(data) {
  return chhRequest.post({
    url: "/user/edit",
    data,
  })
}
export function deUser(data) {
  return chhRequest.post({
    url: "/user/delete",
    data,
  })
}