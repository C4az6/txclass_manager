// 推荐课程接口模块

import HTTP from '@/utils/http';
import { API } from '../config/config'

export default class RecomCourseService extends HTTP {
  getRecomCourse() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.RECOM_COURSE.GET_RECOM_COURSE,
        success(data) {
          resolve(data)
        },
        error(err) {
          alert('请求失败!');
          reject(err)
        }
      })
    })
  }
}