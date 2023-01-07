import HTTP from '@/utils/http'
import { API } from '../config/config'

export default class CollectionsService extends HTTP {
  getCollectionData() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.COLLECTION.GET_COLLECTION_DATA,
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