import { EyeOutlined,EditOutlined,DeleteOutlined,SearchOutlined,DownloadOutlined,SyncOutlined,PlusCircleOutlined } from '@ant-design/icons';


export const contentConfig = {
  type:'goods',
  title: "商品列表",
  createText: "新建商品",
  module: "systemModule",
  propList: [
    { title: "操作", key: 'operate',fixed: 'left',align: 'center',icon:<EditOutlined/>,
      operateBtns:[
        {type:'view',text:'查看',icon:<EyeOutlined />,clickFn:'view'},
        {type:'edit',text:'编辑',icon:<EditOutlined />,clickFn:'edit'},
        {type:'delete',text:'删除',icon:<DeleteOutlined />,clickFn:'delete'},
      ]
    },
    { title: "商品图片", width: 70 ,dataIndex: 'img',align: 'center',key: 'img',},
    { title: "商品名称", width: 150 ,dataIndex: 'goodsName',key: 'goodsName',ellipsis: true,align: 'center',search:'input'},
    { title: "商品标题", width: 150 ,dataIndex: 'title',key: 'title',ellipsis: true,align: 'center',search:'input'},
    { title: "原价格", width: 100 ,dataIndex: 'orgPrice',key:'orgPrice',ellipsis: true,},
    { title: "现价格", width: 100 ,dataIndex: 'price',key:'price',ellipsis: true,
      sorter: {compare: (a, b) => a.price - b.price ? 1 : -1}
    },
    { title: "收藏人数", width: 80 ,dataIndex:'cfav',key:'cfav', ellipsis: true,
      sorter: {compare: (a, b) => a.cfav - b.cfav ? 1 : -1}
    },
    { title: "状态", width: 80, dataIndex:'status',align: 'center',key:'status',ellipsis: true, search:'select',
      filters: [
        {
          text: '全部',
          value: '全部',
        },
        {
          text: '启用',
          value: '启用',
        },
        {
          text: '禁用',
          value: '禁用',
        },
      ],
    },
    { title: "创建时间",width: 150,dataIndex:'createAt',key:'createAt',ellipsis: true,},
    { title: "更新时间",width: 150,dataIndex:'updateAt',key:'updateAt',slotName: "updateAt",ellipsis: true,},
  ],
  operateList:[
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
  ],
  showIndexColumn: true,
  showSelectColumn: false
}
