import React from 'react';
import LoginService from '../services/Login';
import Header from '@/components/index/Header'
import SideBar from '@/components/index/SideBar'
import Container from '@/components/index/Container'

import { NAV } from '@/config/config'

const loginService = new LoginService();
export default class IndexPage extends React.Component {
  state = {
    curIdx: 0,
    field: NAV[0].field,
    title: NAV[0].title
  }

  async login_check() {
    const { history } = this.props;
    const { data } = await loginService.login_check();
    const { error_code } = data;
    if (error_code === 10006) {
      history.push('/login');
      return;
    }
    // 登录状态下显示课程管理页
    history.push('/course1')
  }

  onNavItemClick(dataItem, index) {
    const { field, title } = dataItem;
    this.setState({
      field,
      title,
      curIdx: index
    })
  }

  componentDidMount() {
    this.login_check();
  }

  render() {
    const { curIdx } = this.state;
    const { children, history } = this.props;
    return (
      <div className="container">
        <Header history={history}></Header>
        <SideBar
          history={history}
          curIdx={curIdx}
          onNavItemClick={this.onNavItemClick.bind(this)}
        ></SideBar>

        <Container
          children={children}
        ></Container>
      </div>
    )
  }
}
