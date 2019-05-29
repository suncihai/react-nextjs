/**
 * 此模块写springboot范例的user的接口
 */
const { axiosServer } = require('./axiosServer')
const {responseWrap, errorResponse} = require('./responseWrap')

const getUsers = (req, res) => {
  axiosServer({
      method: 'GET',
      url: `http://localhost:8080/getusers`,
      params: req.body,
      headers: req.headers,
    })
    .then(responseWrap(req, res))
    .catch(errorResponse(req, res))
}

const addUser = (req, res) => {
  axiosServer({
      method: 'GET',
      url: `http://localhost:8080/adduser`,
      params: req.body,
      headers: req.headers,
    })
    .then(responseWrap(req, res))
    .catch(errorResponse(req, res))
}

const deleteUser = (req, res) => {
  axiosServer({
      method: 'GET',
      url: `http://localhost:8080/deleteuser`,
      params: req.body,
      headers: req.headers,
    })
    .then(responseWrap(req, res))
    .catch(errorResponse(req, res))
}

const register = (req, res) => {
  axiosServer({
      method: 'GET',
      url: `http://localhost:8080/register`,
      params: req.body,
      headers: req.headers,
    })
    .then(responseWrap(req, res))
    .catch(errorResponse(req, res))
}

module.exports = {
  getUsers,
  addUser,
  deleteUser,
  register
}
