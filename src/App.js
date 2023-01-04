import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import IndexPage from './pages/Index'
import LoginPage from './pages/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={LoginPage} path="/login"></Route>
        {/* 根组件必须放在最后面 */}
        <Route component={IndexPage} path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
