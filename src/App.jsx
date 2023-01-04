import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import IndexPage from './pages/Index'
import Login from './pages/Login'
import About from './pages/About'

// sub page
import DetailPage from './pages/sub/Detail'
import ListPage from './pages/sub/List'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/" render={
              () => (
                <IndexPage>
                  <Switch>
                    <Route path="/sub/detail" component={DetailPage}></Route>
                    <Route path="/sub/list" component={ListPage}></Route>
                  </Switch>
                </IndexPage>
              )
            }></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}