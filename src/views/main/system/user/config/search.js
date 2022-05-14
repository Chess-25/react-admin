import { SearchOutlined,DownloadOutlined,SyncOutlined,DeleteOutlined,PlusCircleOutlined } from '@ant-design/icons';

export const searchConfig = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 20px'
  },
  formItems: [
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
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
