import React, { Component } from 'react';

import './index.scss'

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

                <td className='course-name'>
                  {item.teacherName}
                </td>

                <td>
                  <a href={item.href} target="_blank">
                    <img src={`http://rnf9v5q2r.bkt.gdipper.com/${item.teacherImgKey}`} alt={item.teacherName} />
                  </a>
                </td>

                <td>
                  {item.courseCounter}
                </td>

                <td>{item.studentCount}</td>
                <td className="teacher-intro">
                  {item.intro}
                </td>
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
