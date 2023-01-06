import React, { Component } from 'react';
import LoginService from '@/services/Login';
import './index.scss'

const loginService = new LoginService();
export default class HeaderLogout extends Component {
  // 用户退出登录
  async onLogoutClick() {
    const cfm = window.confirm('确认退出登录吗?');
    if (cfm) {
      const { data } = await loginService.logoutAction();
      const { error_code } = data;
      if (error_code === 0) {
        // 退出成功,跳转登录页
        this.props.history.push('/login')
      }
    }

  }
  render() {
    return (
      <span className="header-logout" onClick={() => this.onLogoutClick()}> 安全退出</span >
    )
  }
}