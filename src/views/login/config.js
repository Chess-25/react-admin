/* 账号登陆校验 */
export const rules = {
  username: [
    {
      required: true,
      message: "请输入用户名!",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{2,10}$/,
      message: "用户名必须是2~10个字母或者数字~",
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
      message: "用户名必须是3位以上的字母或者数字~",
      trigger: "blur"
    }
  ],
  code:[{ required: true, message: '请输入验证码!' }],
}
  