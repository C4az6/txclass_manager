import React, { Component } from 'react';
import './index.scss';

export default class Board extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="page-board">
        {children}
      </div>
    )
  }
}