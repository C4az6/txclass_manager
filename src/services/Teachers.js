import HTTP from '@/utils/http'
import { API } from '../config/config'

export default class TeacherService extends HTTP {
  getTeacherData() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.TEACHER.GET_TEACHER_DATA,
        success(data) {
          resolve(data)
        },
        error(error) {
          alert('网络请求异常!')
          reject(error)
        }
      })
    })
  }
}