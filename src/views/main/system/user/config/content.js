import { EyeOutlined,EditOutlined,DeleteOutlined,SearchOutlined,DownloadOutlined,SyncOutlined,PlusCircleOutlined } from '@ant-design/icons';

export const contentConfig = {
  type:'user',
  title: "用户",
  createText: "新建用户",
  module: "systemModule",
  propList: [
    { title: "操作", key: 'operate',fixed: 'left',align: 'center',icon:<EditOutlined/>,
      operateBtns:[
        {type:'detail',text:'详情',icon:<EyeOutlined />,clickFn:'detail'},
        {type:'delete',text:'删除',icon:<DeleteOutlined />,clickFn:'delete'},
      ]
    },
    { title: "用户头像", width: 70,dataIndex: 'img',align: 'center',key: 'img',},
    { title: "id", width: 70 ,dataIndex: 'iid',key: 'iid',align: 'center',ellipsis: true,},
    { title: "用户名", width: 100 ,dataIndex: 'username',key: 'username',align: 'center',ellipsis: true,search:'input',},
    { title: "真实姓名", width: 80 ,dataIndex: 'realname',key: 'realname',align: 'center',ellipsis: true},
    { title: "部门", width: 70 ,dataIndex: 'departmentId',key: 'departmentId',align: 'center',ellipsis: true},
    { title: "岗位", width: 70 ,dataIndex: 'roleId',key: 'roleId',align: 'center',ellipsis: true},
    { title: "手机号码", width: 100 ,dataIndex: 'cellphone',key:'cellphone',ellipsis: true},
    { title: "状态", width: 70, dataIndex:'status',align: 'center',key:'status',ellipsis: true,search:'dropdown',
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
      // onFilter: (value, record) => record.status.indexOf(value) === 0,
      // filterSearch: true,
    },
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
      clickFn:'batch_delete',
    },
  ],
  showIndexColumn: true,
  showSelectColumn: false
}
