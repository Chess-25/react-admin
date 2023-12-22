export const modalConfig = {
  title: "用户",
  formItems: [
    { field: "id",type: "hidden",label: "id",},
    { field: "status",type: "hidden",label: "状态"},
    { field: "username",type: "input",label: "用户名",placeholder: "请输入用户名"},
    { field: "realname",type: "input",label: "真实姓名",placeholder: "请输入真实姓名"},
    { field: "password",type: "input",label: "用户密码",placeholder: "请输入密码"},
    { field: "cellphone",type: "input",label: "电话号码",placeholder: "请输入电话号码"},
    { field: "depName",type: "tree",label: "选择部门",placeholder: "请选择部门",
      options: [
        {
            title: '研发部',
            value:'研发部',
            children: [
              { title: '产品部',value:'产品部',},
              { title: '销售部',value:'销售部',children: [{title: '财务部',value:'财务部',
                children: [{title: '财务组',value:'财务组',children: [{title: '审计组',value:'审计组',}]}]}]
            },
            {
              title: '海外部',
              value: '海外部',
            }
          ]
        },
        {
          title: '人事部',
          value: '人事部',
          children: [
            {
              title: '运营部',
              value: '运营部',
            }
          ]
        }
      ]
    },
    { field: "postName",type: "select",label: "选择角色",placeholder: "请选择角色",
      options: [
        { title: '前端', value: '前端' },
        { title: '后端', value: '后端' },
        { title: '硬件', value: '硬件' },
      ]
    },
  ],
  //表单校验规则
  rules: {
    username: [
      {
        required: true,
        message: "请输入用户名!",
        trigger: "blur"
      },
      {
        pattern: /.{3,10}$/,
        message: "用户名必须是3~10个字符~",
        trigger: "blur"
      }
    ],
    realname: [
      {
        required: true,
        message: "请输入真实姓名!",
        trigger: "blur"
      },
      {
        pattern: /.{3,10}$/,
        message: "请输入真实姓名必须是3~10个字符~",
        trigger: "blur"
      }
    ],
    password: [
      {
        required: true,
        message: "请输入密码!",
        trigger: "blur"
      },
      {
        pattern: /^[a-z0-9]{3,}$/,
        message: "密码必须是3位以上的字母或者数字~",
        trigger: "blur"
      }
    ],
    cellphone: [
      {
        required: true,
        message: "请输入用户名手机号!",
        trigger: "change"
      },
      {
        pattern: /^[0-9]{6,11}$/,
        message: "手机号必须是6~11个数字~",
        trigger: "change"
      }
    ],
    depName: [
      {
        required: true,
        message: "请选择部门!",
        trigger: "blur"
      },
    ],
    postName: [
      {
        required: true,
        message: "请选择角色!",
        trigger: "blur"
      },
    ],
  },
  colLayout: { span: 24 },
  itemStyle: {}
}
