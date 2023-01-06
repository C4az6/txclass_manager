import React from 'react';
import { Link } from 'react-router-dom'
import LoginService from '../services/Login';
import Header from '@/components/index/Header'
import SideBar from '@/components/index/SideBar'

import { NAV } from '@/config/config'

const loginService = new LoginService();
export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    curIdx: 0,
    field: NAV[0].field,
    title: NAV[0].title
  }

  async login_check() {
    const { data } = await loginService.login_check();
    const { error_code } = data;
    if (error_code === 10006) {
      const { history } = this.props;
      history.push('/login');
    }
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
    const { history } = this.props;
    return (
      <div className="container">
        <Header history={history}></Header>
        <SideBar
          history={history}
          curIdx={curIdx}
          onNavItemClick={this.onNavItemClick.bind(this)}
        ></SideBar>
      </div>
    )
  }
}