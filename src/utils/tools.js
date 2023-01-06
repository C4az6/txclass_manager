export function trimSpace(str) {
  return str.replace(/\s+/g, '');
}

export function getDatas(errorCode, data, history, callback) {
  if (errorCode === 0 && data && data.length > 0) {
    // 接口有数据
    callback();
  } else {
    history.push('/404');
  }
}
