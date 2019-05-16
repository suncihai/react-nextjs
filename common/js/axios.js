import axiosOrigin from 'axios'
// import axiosRetry from 'axios-retry'
// const axiosOrigin = require('axios-proxy-fix')
import qs from 'qs'
import cookie from 'cookie'
import { breakDownHostUrl } from './utils';

// import utils from 'utils'

// axiosOrigin.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axiosOrigin.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
if (process.browser) {
  const Fingerprint2 = require('fingerprintjs2')
  new Fingerprint2({
    excludeUserAgent: false,
    excludeLanguage: false,
    excludeColorDepth: false,
    excludeScreenResolution: false,
    excludeAvailableScreenResolution: false,
    excludeTimezoneOffset: false,
    excludeSessionStorage: false,
    excludeIndexedDB: false,
    excludeAddBehavior: false,
    excludeOpenDatabase: false,
    excludeCpuClass: false,
    excludePlatform: false,
    excludeDoNotTrack: false,
    excludeCanvas: false,
    excludeWebGL: false,
    excludeAdBlock: false,
    excludeHasLiedLanguages: false,
    excludeHasLiedResolution: false,
    excludeHasLiedOs: false,
    excludeHasLiedBrowser: false,
    excludeJsFonts: true,
    excludeFlashFonts: true,
    excludePlugins: false,
    excludeIEPlugins: false,
    excludeTouchSupport: false,
    excludePixelRatio: false,
    excludeHardwareConcurrency: false,
    excludeWebGLVendorAndRenderer: false,
    excludeDeviceMemory: false,
    excludeAudioFP: true
  }).get(function (result, components) {
    // window.device = result
    // console.log(result)
    result = result.slice(0, 32)
    window.device = result
  })
}

let cookieData
// if (process.browser) {
//   cookieData =  cookie.parse(document.cookie)
// }

/**
 * [axiosClient description]
 * @type {[type]}
 */
export const axiosClient = axiosOrigin.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'X-BM-CLIENT': 'WEB',
    'X-BM-DEVICE': 1,
    'X-BM-VERSION': process.env.version || '1.0.0',
  },
  transformRequest(data, headers) {
    cookieData =  cookie.parse(document.cookie)
    headers['X-BM-DEVICE'] = window.device || 1;
    headers['Authorization'] = cookieData && cookieData.accessToken;
    return qs.stringify(data)
  },
  transformResponse(res) {
    //console.log("res",res);
    const host = window.location.host
    const webDomain = breakDownHostUrl(host)
    let cookieOptions
    if (webDomain.indexOf('localhost') < 0) {
      cookieOptions = { maxAge: 0, domain: `.${webDomain}`, }
    } else {
      cookieOptions = { maxAge: 0 }
    }

    if (+res.code === -6) {
      document.cookie = cookie.serialize('accessToken', null, cookieOptions)
      document.cookie = cookie.serialize('accessSalt', null, cookieOptions)
      document.cookie = cookie.serialize('loginName', null, cookieOptions)
    }
    const ret = JSON.parse(res)
    return ret
  }
  // baseURL: process.env.baseUrl,
})


axiosClient.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res.data
    }
    return res
  },
  err => {
    return err
  }
)

