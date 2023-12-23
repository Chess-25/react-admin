import React, { memo } from "react";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn';//国际化改中文
import routes from "./router";
import store from "@/store";
const App = memo(() => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zh_CN}>
        <HashRouter>
          {renderRoutes(routes)}
        </HashRouter>
      </ConfigProvider>
    </Provider>
  );
});

export default App;
