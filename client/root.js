import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/configStore'

import Home from './components/Home'

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route component={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
