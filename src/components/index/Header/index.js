import React, { Component } from 'react';
import './index.scss'

// Header组件下的子组件
import HeaderLogo from './Logo'
import HeaderTitle from './Title'
import HeaderLogout from './Logout'

export default class Header extends Component {
  render() {
    const { history } = this.props;
    return (
      <header className="header">
        <HeaderLogo></HeaderLogo>
        <HeaderTitle></HeaderTitle>
        <HeaderLogout history={history}></HeaderLogout>
      </header>
    )
  }
}