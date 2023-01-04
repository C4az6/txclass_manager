// 对axios进行封装
import axios from 'axios';
import qs from 'qs';

export default class HTTP {
  axiosPost(option) {
    axios({
      url: option.url,
      method: 'post',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // 返回一个序列化之后的数据
      data: qs.stringify(option.data)
    }).then(res => {
      option.success(res.data);
    }).catch(err => {
      option.error(err);
    })
  }

  axiosGet(options) {
    axios({
      url: options.url
    }).then(res => {
      options.success(res)
    }).catch(err => {
      options.error(err);
    })
  }
}