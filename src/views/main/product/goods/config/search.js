import { SearchOutlined,DownloadOutlined,SyncOutlined,DeleteOutlined,PlusCircleOutlined } from '@ant-design/icons';

export const searchConfig = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 20px'
  },
  formItems: [
    {
      field: 'goodsName',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'title',
      type: 'input',
      label: '商品标题',
      placeholder: '请输入商品标题'
    },
    {
      field: 'enable',
      type: 'select',
      label: '商品状态',
      placeholder: '请选择商品状态',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'cate',
      type: 'select',
      label: '商品分类',
      placeholder: '请选择商品状态',
      options: [
        { title: '上衣', value: 'coat' },
        { title: '短袖', value: 'short' },
        { title: '裙子', value: 'skirt' },
        { title: '裤子', value: 'trouser' },
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  operateBtns:[
    {
      type:'common',
      text:'搜索',
      icon:<SearchOutlined />,
      clickFn:'search',
    },
    {
      type:'downLoad',
      text:'导出',
      icon:<DownloadOutlined />,
      clickFn:'downLoad',
    },
    {
      type:'reset',
      text:'重置',
      icon:<SyncOutlined />,
      clickFn:'reset',
    },
    {
      type:'common',
      text:'添加',
      icon:<PlusCircleOutlined />,
      clickFn:'add',
    },
    {
      type:'delete',
      text:'删除',
      icon:<DeleteOutlined />,
      clickFn:'delete',
    },
  ]
}
