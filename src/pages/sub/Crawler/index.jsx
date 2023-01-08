import React, { Component } from 'react';

import ListTitle from '@/components/common/ListTitle'
import TableHead from '@/components/common/TableHead'
import TableBody from './TableBody';

import CrawlerService from '@/services/Crawler.js';

import { CRAWLER_TH } from '@/config/table_config.js'
import crawlerData from '@/config/crawler.js'


import './index.scss';

const crawlerService = new CrawlerService()
export default class Slider extends Component {
  state = {
    title: '数据爬虫管理',
    crawlerData
  }

  onRefreshData() {
    console.log('refresh data');
  }

  onCrawlClick(apiName, index) {
    const { crawlerData } = this.state;
    crawlerData[index].loading = !this.state.crawlerData[index].loading
    this.setState({
      crawlerData: this.state.crawlerData
    }, async () => {
      const result = await crawlerService.CrawlerAction(apiName);
      const { error_code, error_msg } = result;
      crawlerData[index].loading = !this.state.crawlerData[index].loading
      this.setState({
        crawlerData: this.state.crawlerData
      })
      alert(error_msg)
    })
  }

  componentDidMount() {

  }

  render() {
    const { title, crawlerData } = this.state;
    return (
      <div className="list-container">
        <ListTitle title={title} onRefreshData={this.onRefreshData.bind(this)}></ListTitle>

        <table className='list-table'>
          <thead>
            <TableHead thData={CRAWLER_TH}></TableHead>
          </thead>
          <TableBody
            crawlerData={crawlerData}
            onCrawlClick={this.onCrawlClick.bind(this)}
          ></TableBody>
        </table>
      </div>
    )
  }
}