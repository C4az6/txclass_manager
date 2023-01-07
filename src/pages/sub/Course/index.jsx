import React, { Component } from 'react';

import CourseService from '@/services/Course.js';
import CommonService from '@/services/Common.js'

import ListTitle from '@/components/common/ListTitle'
import TableHead from '@/components/common/TableHead';
import TableBody from './TableBody';

import { COURSE_TH } from '@/config/table_config.js'

import { getDatas } from '@/utils/tools.js'

import './index.scss';

const courseService = new CourseService();
const commonService = new CommonService()

export default class Course extends Component {
  state = {
    title: '课程管理',
    courseData: [],
    fieldsData: []
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
        courseData,
        fieldsData
      })
    });
  }

  onRefreshData() {
    this.getCourseData();
  }

  async onSelectChange(data, index) {
    const { courseData } = this.state;
    const cid = courseData[index].cid;
    courseData[index].field = data.id;
    courseData[index].fieldTitle = data.title;

    this.setState({
      courseData
    })
    const result = await courseService.changeCourseField({
      cid,
      field: data.id
    });
    console.log('>>>>>>>>> ', result);
    const { error_code, error_msg } = result;
    if (error_code !== 0) {
      return alert(error_msg)
    }
  }

  async onStatusClick(index) {
    // 注意：解构赋值是浅拷贝操作
    const { courseData } = this.state,
      cid = courseData[index].cid;
    let status = courseData[index].status
    switch (status) {
      case 1:
        status = 0;
        courseData[index].status = 0
        break;
      case 0:
        status = 1;
        courseData[index].status = 1;
        break;
      default:
        break;
    }
    this.setState({
      courseData: this.state.courseData
    })
    const response = await commonService.changeStatus({ id: cid, status, field: "course" });
    if (response.error_code !== 0) {
      return alert(response.error_msg);
    }

  }

  componentDidMount() {
    this.getCourseData();
  }

  render() {
    const { title, courseData, fieldsData } = this.state;
    return (
      <div className="list-container">
        <ListTitle title={title} onRefreshData={this.onRefreshData.bind(this)}></ListTitle>

        <table className='list-table'>
          <thead>
            <TableHead thData={COURSE_TH}></TableHead>
          </thead>
          <TableBody
            courseData={courseData}
            fieldsData={fieldsData}
            onSelectChange={this.onSelectChange.bind(this)}
            onStatusClick={this.onStatusClick.bind(this)}
          ></TableBody>
        </table>
      </div>
    )
  }
}