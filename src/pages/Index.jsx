import React from 'react';
import { Link } from 'react-router-dom'
import LoginService from '../services/Login';
import Header from '@/components/index/Header'
const loginService = new LoginService();
export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {}

  async login_check() {
    const { data } = await loginService.login_check();
    const { error_code } = data;
    if (error_code === 10006) {
      const { history } = this.props;
      history.push('/login');
    }
  }

  componentDidMount() {
    this.login_check();
  }

  render() {
    const { children, history } = this.props;
    return (
      <div className="container">
        <Header history={history}></Header>
      </div>
    )
  }
}