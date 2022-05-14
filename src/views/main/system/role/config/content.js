import { EyeOutlined,EditOutlined,DeleteOutlined,SearchOutlined,DownloadOutlined,SyncOutlined,PlusCircleOutlined } from '@ant-design/icons';

export const contentConfig = {
  type:'user',
  title: "用户列表",
  createText: "新建用户",
  module: "systemModule",
  propList: [
    { title: "操作", width: 50, key: 'operate',fixed: 'left',align: 'center',icon:<EditOutlined/>,
      operateBtns:[
        {type:'view',text:'查看',icon:<EyeOutlined />,clickFn:'view'},
        {type:'edit',text:'编辑',icon:<EditOutlined />,clickFn:'edit'},
        {type:'delete',text:'删除',icon:<DeleteOutlined />,clickFn:'delete'},
      ]
    },
    { title: "用户头像", width: 70,dataIndex: 'img',align: 'center',key: 'img',},
    { title: "id", width: 80 ,dataIndex: 'iid',key: 'iid',ellipsis: true},
    { title: "用户名", width: 100 ,dataIndex: 'name',key: 'name',ellipsis: true},
    { title: "真实姓名", width: 150 ,dataIndex: 'realname',key: 'realname',ellipsis: true},
    { title: "手机号码", width: 100 ,dataIndex: 'cellphone',key:'cellphone',ellipsis: true},
    { title: "状态", width: 80, dataIndex:'status',align: 'center',key:'status',ellipsis: true,search:'input' },
    { title: "创建时间",width: 150,dataIndex:'createAt',key:'createAt',ellipsis: true,
      sorter: {compare: (a, b) => a.createAt - b.createAt ? 1 : -1,multiple: 1,}
    },
    { title: "更新时间",width: 150,dataIndex:'updateAt',key:'updateAt',ellipsis: true,
      sorter: {compare: (a, b) => a.updateAt - b.updateAt ? 1 : -1,multiple: 1,}
    },
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
