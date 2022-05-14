import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import localCache from "@/utils/cache"
const renderRoutes = (routes, authed=localCache.getCache("token"), authPath='/login', extraProps = {}, switchProps = {}) => routes ? (
  <Switch {...switchProps}>
    {routes.map((route, i) => (
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
          if (route.requiresAuth && authed) {
            // if (props.history.location.pathname!==route.path&&authed!=='') {
            //   //路径不存在跳转404
            //   // return <Redirect to={{ pathname: '/404',state: { from: props.location }}} />
            // }
            return <route.component {...props} {...extraProps} route={route} />
          }//路径authed/taoken为空跳转login
          return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
        }}
      />
    ))}
    {/* {authed&&<Redirect to={{ pathname: '/404',component:NotFound}} />} */}
  </Switch>
) : null
export default renderRoutes