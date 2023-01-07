import React, { Component } from 'react';

import CourseService from '@/services/Course.js';

import ListTitle from '@/components/common/ListTitle'
import TableHead from '@/components/common/TableHead';
import TableBody from './TableBody';

import { COURSE_TH } from '@/config/table_config.js'

import { getDatas } from '@/utils/tools.js'

import './index.scss';

const courseService = new CourseService();

export default class Course extends Component {
  state = {
    title: '课程管理',
    courseData: []
  }

  async getCourseData() {
    const { data: res } = await courseService.getCourse(),
      { history } = this.props,
      errorCode = res.error_code,
      data = res.data;

    getDatas(errorCode, data, history, () => {
      const { courseData, fieldsData } = data
      courseData.forEach((citem, cindex) => {
        if (citem.field === 0) {
          citem.fieldTitle = '无分类'
        }
        fieldsData.forEach((fitem, findex) => {
          if (citem.field === fitem.id) {
            citem.fieldTitle = fitem.title;
          }
        })
      })

      this.setState({
        courseData
      })
    });
  }

  onRefreshData() {
    this.getCourseData();
  }

  componentDidMount() {
    this.getCourseData();
  }

  render() {
    const { title, courseData } = this.state;
    return (
      <div className="list-container">
        <ListTitle title={title} onRefreshData={this.onRefreshData.bind(this)}></ListTitle>

        <table className='list-table'>
          <thead>
            <TableHead thData={COURSE_TH}></TableHead>
          </thead>
          <TableBody courseData={courseData}></TableBody>
        </table>
      </div>
    )
  }
}