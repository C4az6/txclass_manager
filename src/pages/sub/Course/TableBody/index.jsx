import React, { Component } from 'react';


import './index.scss';

export default class TableBody extends Component {
  render() {
    const { courseData } = this.props;
    return (
      <tbody>
        {
          courseData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.cid}</td>
                <td>
                  <a href={item.href} target="_blank">
                    <img src={`http://rnf9v5q2r.bkt.gdipper.com/${item.posterKey}`} alt={item.courseName} />
                  </a>
                </td>
                <td className='course-name'>
                  <a href={item.href} target="_blank">
                    {item.courseName}
                  </a>
                </td>
                <td>
                  <span className={item.price === '0' ? 'free' : 'price'}>
                    {item.price === '0' ? '免费' : `${item.price}`}
                  </span>
                </td>
                <td>{item.studentCount}</td>
                <td>
                  {item.fieldTitle}
                </td>
                <td>
                  <button className={['btn', item.status ? 'btn-danger' : 'btn-success'].join(' ')}>
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
