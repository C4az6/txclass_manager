import React, { Component } from 'react';


import './index.scss';

export default class TableTh extends Component {
  render() {
    console.log(">>>>>>> ", this.props);
    const { thData } = this.props;
    return (
      <tr>
        {
          thData.map((item, index) => {
            return (
              <th key={index}>{item}</th>
            )
          })
        }
      </tr>
    )
  }
}