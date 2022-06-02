export const modalConfig = {
  title: '商品',
  formItems: [
    { field: "iid",type: "hidden",label: "iid",},
    { field: "status",type: "hidden",label: "状态",},
    { field: "cfav",type: "hidden",label: "收藏人数",},
    { field: 'goodsName', type: 'input', label: '商品名称', placeHolder: '请输入商品名称' },
    { field: 'title', type: 'input', label: '商品标题', placeHolder: '请输入商品标题' },
    { field: 'orgPrice', type: 'input', label: '原价格', placeHolder: '请输入原价格' },
    { field: 'price', type: 'input', label: '现价格', placeHolder: '请输入商品名称' },
  ],
  rules:{
    iid: [ {required: false, trigger: "blur"},{ trigger: "blur"}],
    status: [ {required: false,trigger: "blur"},{trigger: "blur"}],
    cfav: [ {required: false, trigger: "blur"},{ trigger: "blur"}],
  },
  colLayout: { span: 24 },
  itemStyle: { padding: 0 }
}
