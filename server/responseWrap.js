const { pendingRecord, pullPromise } = require('./pendingMod')

const responseWrap = (req, res, config) => {
  return (data, paramKey) => {
    let ret;
    if (paramKey) {
      delete pendingRecord[paramKey]
    }
    res.set('Cache-Control', 'no-store')
    if (+data.status === 200 && +data.data.code === -6) {
      // console.log(data)
      // req.session.destroy(function(err) {
      // })
      try {
        return res.json(data.data)
      } catch(e) {
        //log.error('10001', req.url, e.message);
        return res.status(200).send({
          code: -6,
          data: 'node unlogin code === -6',
          success: false,
        });
      }

    } else {
      // console.log(data.data)
      try {
        if(config && config.preDealFn) {
          config.preDealFn(data.data);
        }
        return res.json(data.data)
      } catch(e) {
        //log.error('10002', req.url, e.message);
        return res.status(200).send({
          code: -6,
          data: 'node unlogin res.json(data.data)',
          success: false,
        });
      }

    }
    if (+data.status !== 200) {
      try {
        //log.error('10003', req.url, data);
        return res.send(data)
      } catch(e) {
        //log.error('10004', req.url, e.message);
        return res.status(200).send({
          code: -6,
          data: 'node unlogin status !== 200',
          success: false,
        });
      }
    }
  }
}

const errorResponse = (req, res) => {
  try {
    return (err, paramKey) => {
      if (paramKey) {
        delete pendingRecord[paramKey]
      }
      //log.error('10005', req.url, err.message);
      return res.status(500).send({
        code: -9999,
        data: 'node error',
        msg: err.message,
        success: false,
      })
    }
  } catch(e) {
    return (err) => {
      //log.error('10006', req.url, err.message);
      return res.status(200).send({
        code: -6,
        data: 'node unlogin errorResponse',
        success: false,
      })
    }
  }
}

module.exports = {
  responseWrap,
  errorResponse,
}
