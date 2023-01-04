import HTTP from 'utils/http'
import { API } from '../config/config'

export default class LoginService extends HTTP {
  loginAction(userInfo) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.LOGIN_ACTION,
        data: userInfo,
        success(data) {
          resolve(data);
        },
        error(err) {
          alert('网络请求失败');
          window.location.reload();
        }
      })
    })
  }
}