import React, { Component } from 'react';
import './index.scss';

export default class LoginForm extends Component {
  render() {
    return (
      <div className="login-form-wrapper">
        <div className="input-box">
          <i className="iconfont icon-user"></i>
          <input type="text" placeholder='用户名' />
        </div>

        <div className="input-box">
          <i className="iconfont icon-lock"></i>
          <input type="password" placeholder='密码' />
        </div>

        <div className="input-box">
          <button className='btn btn-primary'>登录</button>
        </div>
      </div>
    )
  }
}