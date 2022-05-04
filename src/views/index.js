import React, { memo } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import store from "@/store";


const Main = memo((props) => {
  const { route } = props;
  return (
    <Provider store={store}>
      <HashRouter>
        {renderRoutes(route.routes)}
      </HashRouter>
    </Provider>
  );
});

export default Main;
