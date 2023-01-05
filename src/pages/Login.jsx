import React, { Component } from 'react';
import Login from 'components/Login'
import './login.scss'
export default class LoginPage extends Component {
  constructor(props) {
    super(props)
  }

  state = {

  }
  render() {
    // 只要注册过路由的组件都有history属性，可以传递给子组件
    const { history } = this.props;
    return (
      <div className="login-page-container" >
        <Login history={history}></Login>
      </div>
    )
  }
}