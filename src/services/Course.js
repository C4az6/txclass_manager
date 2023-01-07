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

  changeCourseField(data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.COURSE.CHANGE_COURSE_FIELD,
        data,
        success(data) {
          resolve(data)
        },
        error(error) {
          alert('网络请求失败!');
          reject(error)
        }
      })
    })
  }

  changeCourseStatus(data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.COURSE.CHANGE_COURSE_STATUS,
        data,
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