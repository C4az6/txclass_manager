import React, { Component } from 'react';

import ListTitle from '@/components/common/ListTitle'
import TableHead from '@/components/common/TableHead'
import TableBody from './TableBody';

import CollectionsService from '@/services/Collections.js';
import CommonService from '@/services/Common.js'

import { COLLECTIONS_TH } from '@/config/table_config.js'


import './index.scss';

const collectionsService = new CollectionsService()
const commonService = new CommonService();
export default class Collection extends Component {
  state = {
    title: '课程集合管理',
    collectionData: []
  }

  async getCollections() {
    const { data: response } = await collectionsService.getCollectionData();
    const { error_code, data } = response;
    if (error_code === 0 && data) {
      this.setState({
        collectionData: data
      })
      return;
    }
  }

  onRefreshData() {
    this.getCollections();
  }

  onStatusClick(index) {
    const { collectionData } = this.state,
      id = collectionData[index].id,
      status = collectionData[index].status;

    const cfm = window.confirm(`确认要${status ? '下架' : '上架'}该课程集合吗?`);
    if (cfm) {
      switch (status) {
        case 1:
          collectionData[index].status = 0;
          break
        case 0:
          collectionData[index].status = 1;
          break;
        default:
          break;
      }
      this.setState({
        collectionData: this.state.collectionData
      }, async function () {
        const response = await commonService.changeStatus({
          id,
          status: this.state.collectionData[index].status,
          field: 'collectionCourse'
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
    this.getCollections()
  }

  render() {
    const { title, collectionData } = this.state;
    return (
      <div className="list-container">
        <ListTitle title={title} onRefreshData={this.onRefreshData.bind(this)}></ListTitle>

        <table className='list-table'>
          <thead>
            <TableHead thData={COLLECTIONS_TH}></TableHead>
          </thead>
          <TableBody
            data={collectionData}
            onStatusClick={this.onStatusClick.bind(this)}
          ></TableBody>
        </table>
      </div>
    )
  }
}