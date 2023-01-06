/* 
  课程管理模块API配置
*/

import HTTP from '@/utils/http';
import { API } from '../config/config'

export default class CourseService extends HTTP {
  getCourse() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.COURSE.GET_COURSE_DATA,
        success(data) {
          resolve(data)
        },
        error(err) {
          alert('网络请求失败!');
          reject(err)
        }
      })
    })
  }
}