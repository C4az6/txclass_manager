import React, { Component } from 'react';

import './index.scss';

export default class TableBody extends Component {


  onStatusClick(index) {
    this.props.onStatusClick(index);
  }

  render() {
    const { data } = this.props;
    return (
      <tbody>
        {
          data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>
                  <a href={item.href} target="_blank">
                    <img className='slider-img' src={`http://rnf9v5q2r.bkt.gdipper.com/${item.posterKey}`} alt={item.courseName} />
                  </a>
                </td>
                <td className='course-name'>
                  <a href={item.href} target="_blank">
                    {item.title}
                  </a>
                </td>
                <td>
                  <span className={item.price === '0' ? 'free' : 'price'}>
                    {item.price === '0' ? '免费' : `${item.price}`}
                  </span>
                </td>
                <td>{item.studentCount}</td>
                <td>{item.label}</td>
                <td>
                  <button
                    className={['btn', item.status ? 'btn-danger' : 'btn-success'].join(' ')}
                    onClick={this.onStatusClick.bind(this, index)}
                  >
                    {item.status ? '下架' : '上架'}
                  </button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    )
  }
}
