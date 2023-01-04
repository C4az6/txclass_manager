import React, { Component } from 'react';
import LoginService from '@/services/Login'
import { trimSpace } from '@/utils/tools';
import './index.scss';

const loginService = new LoginService();

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onInputTyping(e) {
    const id = e.target.id,
      val = e.target.value;
    this.setState({
      [id]: val
    })
  }

  async onLoginSubmit(e) {
    const { username, password } = this.state;
    if (trimSpace(username).length <= 0) {
      alert('用户名长度不正确');
      return;
    }
    if (trimSpace(password).length <= 0) {
      alert('密码长度不正确');
      return;
    }

    const result = await loginService.loginAction({ username: trimSpace(username), password: trimSpace(password) })
    const { error_code, error_msg } = result;
    if (error_code !== 0) {
      alert(`${error_msg} --- errorCode: ${error_code}`)
      return;
    }

    alert('登录成功');
    // 跳转
    this.props.history.push('/')

  }

  render() {
    return (
      <div className="login-form-wrapper">
        <div className="input-box">
          <label htmlFor='username' className="iconfont icon-user"></label>
          <input id="username" type="text" placeholder='管理员用户名' onChange={(e) => this.onInputTyping(e)} />
        </div>

        <div className="input-box">
          <label htmlFor='password' className="iconfont icon-lock"></label>
          <input id="password" type="password" placeholder='管理员密码' onChange={(e) => this.onInputTyping(e)} />
        </div>

        <div className="input-box">
          <button className='btn btn-primary' onClick={e => this.onLoginSubmit(e)}>登录</button>
        </div>
      </div>
    )
  }
}