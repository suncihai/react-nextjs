/**
 * 此模块写活动页
 */
const { axiosServer } = require('./axiosServer')
const {responseWrap, errorResponse} = require('./responseWrap')

const getPartners = (req, res) => {
  axiosServer({
      method: 'GET',
      url: `${baseApiurl}/partners`,
      params: req.body,
      headers: req.headers,
    })
    .then(responseWrap(req, res))
    .catch(errorResponse(req, res))
}

module.exports = {
  getPartners: getPartners,
}
