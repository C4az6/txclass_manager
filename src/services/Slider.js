import HTTP from '@/utils/http'
import { API } from '../config/config'

export default class SliderService extends HTTP {
  getSliderData() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.SLIDER.GET_SLIDER_DATA,
        success(data) {
          resolve(data);
        },
        error(error) {
          alert("error: ", error);
          reject(error);
        }
      })
    })
  }
}