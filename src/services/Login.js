import HTTP from 'utils/http'
import { API } from '../config/config'

export default class LoginService extends HTTP {
  loginAction(userInfo) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.LOGIN.LOGIN_ACTION,
        data: userInfo,
        success(data) {
          resolve(data);
        },
        error(err) {
          alert('网络请求失败');
        }
      })
    })
  }
  login_check() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.LOGIN.LOGIN_CHECK,
        success(data) {
          resolve(data)
        },
        error(err) {
          alert('网络请求失败')
          window.location.reload();
        }
      })
    })
  }
  logoutAction() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.LOGIN.LOGOUT_ACTION,
        success(data) {
          resolve(data)
        },
        error(err) {
          alert('网络请求失败')
          window.location.reload();
        }
      })
    })
  }
}