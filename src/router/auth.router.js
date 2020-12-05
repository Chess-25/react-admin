const Router = require('koa-router');

const authRouter = new Router();

const {
  login,
  success
} = require('../controller/auth.controller');

//导入中间件
const {
  verifyLogin,
  verifyAuth
} = require('../middleware/auth.middlleware');

authRouter.post('/login',verifyLogin,login);
authRouter.get('/test',verifyAuth,success);

module.exports = authRouter;