import React, { Component } from 'react';

import ListTitle from '@/components/common/ListTitle'
import TableHead from '@/components/common/TableHead'
import TableBody from './TableBody';

import TeacherService from '@/services/Teachers.js';
import CommonService from '@/services/Common.js'

import { TEACHER_TH } from '@/config/table_config.js'


import './index.scss';

const teacherService = new TeacherService()
const commonService = new CommonService();
export default class Teacher extends Component {
  state = {
    title: '老师管理',
    teacherData: []
  }

  async getTeachers() {
    const { data: response } = await teacherService.getTeacherData();
    const { error_code, data } = response;
    if (error_code === 0 && data) {
      this.setState({
        teacherData: data
      })
      return;
    }
  }

  onRefreshData() {
    this.teacherData();
  }

  onStatusClick(index) {
    const { teacherData } = this.state,
      id = teacherData[index].id,
      status = teacherData[index].status;

    const cfm = window.confirm(`确认要${status ? '下架' : '上架'}该讲师吗?`);
    if (cfm) {
      switch (status) {
        case 1:
          teacherData[index].status = 0;
          break
        case 0:
          teacherData[index].status = 1;
          break;
        default:
          break;
      }
      this.setState({
        teacherData: this.state.teacherData
      }, async function () {
        const response = await commonService.changeStatus({
          id,
          status: this.state.teacherData[index].status,
          field: 'teacher'
        });
        console.log("response: ", response);
        const { error_code, error_msg } = response;
        if (error_code !== 0) {
          alert(error_msg);
        }
      })
    }
  }

  componentDidMount() {
    this.getTeachers()
  }

  render() {
    const { title, teacherData } = this.state;
    return (
      <div className="list-container">
        <ListTitle title={title} onRefreshData={this.onRefreshData.bind(this)}></ListTitle>

        <table className='list-table'>
          <thead>
            <TableHead thData={TEACHER_TH}></TableHead>
          </thead>
          <TableBody
            data={teacherData}
            onStatusClick={this.onStatusClick.bind(this)}
          ></TableBody>
        </table>
      </div>
    )
  }
}