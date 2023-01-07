import React, { Component } from 'react';

import ListTitle from '@/components/common/ListTitle'
import TableHead from '@/components/common/TableHead'
import TableBody from './TableBody';

import SliderService from '@/services/Slider.js';
import CommonService from '@/services/Common.js'

import { SLIDER_TH } from '@/config/table_config.js'


import './index.scss';

const sliderService = new SliderService()
const commonService = new CommonService();
export default class Slider extends Component {
  state = {
    title: '轮播图管理',
    sliderData: []
  }

  async getSliders() {
    const { data: response } = await sliderService.getSliderData();
    const { error_code, data } = response;
    if (error_code === 0 && data) {
      this.setState({
        sliderData: data
      })
      return;
    }
  }

  onRefreshData() {
    this.getSliders();
  }

  onStatusClick(index) {
    const { sliderData } = this.state,
      id = sliderData[index].id,
      status = sliderData[index].status;

    const cfm = window.confirm(`确认要${status ? '下架' : '上架'}该轮播图吗?`);
    if (cfm) {
      switch (status) {
        case 1:
          sliderData[index].status = 0;
          break
        case 0:
          sliderData[index].status = 1;
          break;
        default:
          break;
      }
      this.setState({
        sliderData: this.state.sliderData
      }, async function () {
        const response = await commonService.changeStatus({
          id,
          status: this.state.sliderData[index].status,
          field: 'slider'
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
    this.getSliders()
  }

  render() {
    const { title, sliderData } = this.state;
    return (
      <div className="list-container">
        <ListTitle title={title} onRefreshData={this.onRefreshData.bind(this)}></ListTitle>

        <table className='list-table'>
          <thead>
            <TableHead thData={SLIDER_TH}></TableHead>
          </thead>
          <TableBody
            data={sliderData}
            onStatusClick={this.onStatusClick.bind(this)}
          ></TableBody>
        </table>
      </div>
    )
  }
}