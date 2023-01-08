import HTTP from '@/utils/http'
import { API } from '../config/config'

export default class CrawlerService extends HTTP {
  CrawlerAction(apiName) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.CRAWLER.CRAWLER_ACTION,
        data: { apiName },
        success(data) {
          resolve(data)
        },
        error(error) {
          alert('网络请求失败!')
          reject(error)
        }
      })
    })
  }
}