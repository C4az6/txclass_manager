import React from 'react';
import { Link } from 'react-router-dom'
export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/sub/detail">Detail Page</Link></li>
          <li><Link to="/sub/list">List Page</Link></li>
        </ul>
        Index Page.
        {this.props.children}
      </div>
    )
  }
}