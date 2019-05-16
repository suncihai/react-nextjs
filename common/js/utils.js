import MD5 from 'crypto-js/md5'

// 正常转化
export const transLang = lang => {
  let langParam = 'en_US'
  if (lang === 'cn') {
    langParam = 'zh_CN'
  } else if (lang === 'jp') {
    langParam = 'ja_JP'
  } else if (lang === 'kr') {
    langParam = 'ko_KR'
  } else if (lang === 'vn') {
    langParam = 'vi_VN'
  } else if (lang === 'ru') {
    langParam = 'ru_RU'
  } else if (lang === 'cn_tw') {
    langParam = 'zh_TW'
  } else if (lang === 'tr') {
    langParam = 'tr_TR'
  } else {
    langParam = 'en_US'
  }
  return langParam
}
// 变态转化 只给极验用
export const transLang2 = lang => {
  let langParam = 'en'
  if (lang === 'cn') {
    langParam = 'zh-cn'
  } else {
    langParam = 'en'
  }
  return langParam
}

export const rand = (length, current) => {
  current = current ? current : ''
  return length
    ? rand(
        --length,
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.charAt(
          Math.floor(Math.random() * 60)
        ) + current
      )
    : current
}
/**
 *
 */
export const insertSignToParams = (params, timestamp, salt) => {
  // asii timsstamp salt => md5
  let keyArr = Object.keys(params)
  let ret = ''
  keyArr = keyArr.sort()
  keyArr.forEach(keyName => {
    if (keyName !== 'timestamp') {
      ret = `${ret}&${keyName}=${params[keyName]}`
    }
  })
  ret = ret.slice(1)
  ret = `${ret}${timestamp}${salt}`
  ret = MD5(ret).toString()
  params.sign = ret // 最后把sign偷偷加上
  return ret
}


// 对输入框输入数字做格式处理，并返回正确内容
export const filterNAN = str => {
  //得到第一个字符是否为负号
  let s = str.toString()
  var t = str.toString().charAt(0)
  //先把非数字的都替换掉，除了数字和.
  s = s.replace(/[^\d\.]/g, '')
  //必须保证第一个为数字而不是.
  s = s.replace(/^\./g, '')
  //保证只有出现一个.而没有多个.
  s = s.replace(/\.{2,}/g, '.')
  //保证.只出现一次，而不能出现两次以上
  s = s
    .replace('.', '$#$')
    .replace(/\./g, '')
    .replace('$#$', '.')
  //如果第一位是负号，则允许添加
  if (t == '-') {
    s = '-' + s
  }
  return s
}

// 判断是否符合金融格式 只能有一位小数点， 小数点后最长8位， 仅包含数字和一个小数点
export const isMoneyType = str => {
  let s = str.toString()
  let reg = /^(([1-9]\d*|0)(\.\d{1,8})?)$|(0\.0?([1-9]\d?))$/
  return reg.test(s)
}

// 8-32  必须包括数字 英文 可以包括 特殊字符 不含空格
export const validatePwd = str => {
  let ret =
    /[a-zA-Z[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]+/.test(str) &&
    /\d+/.test(str) &&
    str.length >= 6 &&
    str.length <= 32 &&
    !/\s/.test(str)
  return ret
}

export const getBrowserLang = () => {
  const lang = window.navigator.language
  let locale
  if (lang === 'zh-CN' || lang === 'cn') {
    locale = 'cn'
  } else if (lang === 'vi-VN') {
    locale = 'vn'
  } else if (lang === 'ja-JP') {
    locale = 'jp'
  } else if (lang === 'ko-KR') {
    locale = 'kr'
  } else if (lang === 'ru-RU') {
    locale = 'ru'
  } else if (lang === 'zh-TW') {
    locale = 'cn_tw'
  } else if (lang === 'tr-TR') {
    locale = 'tr'
  } else {
    locale = 'en'
  }
  return locale
}

export const breakDownHostUrl = (url) => {
  let hostUrl = url
  let newUrl = hostUrl
  // 防止未做301跳转，产生XXX.XXX的域名
  if (hostUrl.split('.') && hostUrl.split('.').length <= 2) {
    newUrl = hostUrl
  } else {
    let number = hostUrl.indexOf('.')
    newUrl = hostUrl.slice(number + 1)
  }
  return newUrl
}

export const getMainSite = () => {
  let mainSite = 'https://www.bitmart.com'
  const host = window.location.host
  const webDomain = breakDownHostUrl(host)
  if (process.env.web_env === 'dev') {
    mainSite = `https://web-frontend-v2-dev-d981hkl2m.${webDomain}`
  } else if (process.env.web_env === 'testing') {
    mainSite = `https://web-frontend-v2-testing.${webDomain}`
  } else if (process.env.web_env === 'master') {
    mainSite = `https://www.${webDomain}`
  }

  return mainSite
}
