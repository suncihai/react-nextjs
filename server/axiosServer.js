/**
* 请记得用node识别的commonjs语法，不要采坑
*/
const axios = require('axios')
const qs = require('qs')
// const axios = require('axios-proxy-fix')
const axiosServer = axios.create({
  // 测试环境 20S超时，正式5s
  timeout: (process.env.NODE_ENV === 'production' ? 10000 : 20000),
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
  transformRequest: (obj) => {
    return qs.stringify(obj)
  },
  // proxy: {
  //   host: '127.0.0.1',
  //   port: 8888,
  // }
})

module.exports = {
  axiosServer,
}
