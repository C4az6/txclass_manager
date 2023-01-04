import React, { Component } from 'react';

import axios from 'axios'

import './index.scss';
import Logo from './Logo'
import Form from './Form'
export default class Login extends Component {

  getCourseData() {
    axios('//localhost:3000/get_course').then(res => {
      console.log("response: ", res);
    }).catch(err => {
      console.log('response error: ', err);
    })
  }

  componentDidMount() {
    this.getCourseData();
  }

  render() {
    return (
      <div className="login-container">
        <Logo></Logo>
        <Form></Form>
      </div>
    )
  }
}