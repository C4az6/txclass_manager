import React, { Component } from 'react';

import './index.scss';
import Logo from './Logo'
import Form from './Form'
export default class Login extends Component {

  componentDidMount() {

  }

  render() {
    const { history } = this.props
    return (
      <div className="login-container">
        <Logo></Logo>
        <Form history={history}></Form>
      </div>
    )
  }
}