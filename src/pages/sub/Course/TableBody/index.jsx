import React, { Component } from 'react';

import TableSelect from '@/components/common/TableSelect'

import './index.scss';

export default class TableBody extends Component {


  onStatusClick(cid, status, index) {
    this.props.onStatusClick(index);
  }

  render() {
    const { courseData, fieldsData, onSelectChange } = this.props;
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
                  <TableSelect
                    fieldsData={fieldsData}
                    selectIndex={index}
                    defaultValue={item.fieldTitle}
                    onSelectChange={onSelectChange}
                  ></TableSelect>
                </td>
                <td>
                  <button
                    className={['btn', item.status ? 'btn-danger' : 'btn-success'].join(' ')}
                    onClick={this.onStatusClick.bind(this, item.cid, item.status, index)}
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
