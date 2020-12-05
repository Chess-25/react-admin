const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

// const userRouter = require('../router/user.router');
// const authRouter = require('../router/auth.router');
const useRoutes = require('../router')
const errorHanlder = require('./error-handle');


const app = new Koa();

app.useRoutes = useRoutes;

app.use(bodyParser());
// keys.use(userRouter.routes());
// keys.use(userRouter.allowedMethods());
// keys.use(authRouter.routes());
// keys.use(authRouter.allowedMethods());
app.useRoutes();

app.on('error',errorHanlder);

module.exports = app;