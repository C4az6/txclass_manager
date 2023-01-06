import React, { Component } from 'react';

import CourseService from '@/services/Course.js';

import ListTitle from '@/components/common/ListTitle'
import TableTh from '@/components/common/TableTh';

import { COURSE_TH } from '@/config/table_config.js'

import { getDatas } from '@/utils/tools.js'

import './index.scss';

const courseService = new CourseService();

export default class Course extends Component {
  state = {
    title: '课程管理'
  }

  async getCourseData() {
    const { data: res } = await courseService.getCourse(),
      { history } = this.props,
      errorCode = res.error_code,
      data = res.data;

    getDatas(errorCode, data, history, () => {
      console.log("data: ", data);
      console.log('正常的业务逻辑~');
    })
  }

  async componentDidMount() {
    this.getCourseData();
  }

  render() {
    const { title } = this.state;
    return (
      <div className="list-container">
        <ListTitle title={title}></ListTitle>

        <table className='list-table'>
          <thead>
            <TableTh thData={COURSE_TH}></TableTh>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    )
  }
}