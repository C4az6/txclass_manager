import React, { Component } from 'react';

import ListTitle from '@/components/common/ListTitle'
import TableHead from '@/components/common/TableHead'
import TableBody from './TableBody';

import RecomCourseService from '@/services/RecomCourse';

import { RECOM_COURSE_TH } from '@/config/table_config.js'


import './index.scss';

const recomCourseService = new RecomCourseService()
export default class RecomCourse extends Component {
  state = {
    title: '推荐课程管理',
    recomCourseData: []
  }

  async getRecomCourseData() {
    const { data: response } = await recomCourseService.getRecomCourse();
    const { error_code, data } = response;
    if (error_code === 0 && data) {
      this.setState({
        recomCourseData: data
      })
      return;
    }
  }

  onRefreshData() {
    this.getRecomCourseData();
  }

  onStatusClick(index) {
    const { recomCourseData } = this.state,
      cid = recomCourseData[index].id,
      status = recomCourseData[index].status;

    const cfm = window.confirm(`确认要${status ? '下架' : '上架'}该课程吗?`);
    if (cfm) {
      switch (status) {
        case 1:
          recomCourseData[index].status = 0;
          break
        case 0:
          recomCourseData[index].status = 1;
          break;
        default:
          break;
      }
      this.setState({
        recomCourseData: this.state.recomCourseData
      }, async function () {
        const response = await recomCourseService.changeCourseStatus({ cid, status: this.state.recomCourseData[index].status });
        console.log("response: ", response);
        const { error_code, error_msg } = response;
        if (error_code !== 0) {
          alert(error_msg);
        }
      })
    }
  }

  componentDidMount() {
    this.getRecomCourseData()
  }

  render() {
    const { title, recomCourseData } = this.state;
    return (
      <div className="list-container">
        <ListTitle title={title} onRefreshData={this.onRefreshData.bind(this)}></ListTitle>

        <table className='list-table'>
          <thead>
            <TableHead thData={RECOM_COURSE_TH}></TableHead>
          </thead>
          <TableBody
            data={recomCourseData}
            onStatusClick={this.onStatusClick.bind(this)}
          ></TableBody>
        </table>
      </div>
    )
  }
}