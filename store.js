import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const InitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  partners: {},
  coins: {},
  users: null,
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  GETPARTNERS: 'GETPARTNERS',
  GETCOINPRICE: 'GETCOINPRICE',
  GETUSERS: 'GETUSERS',
  ADDUSER: 'ADDUSER',
  DELETEUSER: 'DELETEUSER'
}

// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: InitialState.count
      })
    case actionTypes.GETPARTNERS:
      return Object.assign({}, state, {
        partners: action.payload
      })
    case actionTypes.GETCOINPRICE:
      return Object.assign({}, state, {
        coins: action.payload
      })
    case actionTypes.GETUSERS:
      return Object.assign({}, state, {
        users: action.payload
      })
    case actionTypes.ADDUSER:
      return Object.assign({}, state, {
        users: state.users.concat(action.payload)
      })
    case actionTypes.DELETEUSER:
      return Object.assign({}, state, {
        users: state.users.filter(user=>user.name!=action.payload)
      })
    default:
      return state
  }
}

// ACTIONS
export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() }
}
export const startClock = () => {
  return { type: actionTypes.TICK, light: true, ts: Date.now() }
}

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT }
}

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT }
}

export const resetCount = () => {
  return { type: actionTypes.RESET }
}

export const getPartners = (data) => {
  return { type: actionTypes.GETPARTNERS, payload: data }
}

export const getCoinPrice = (data) => {
  return { type: actionTypes.GETCOINPRICE, payload: data }
}

export const getUsers = (data) => {
  return { type: actionTypes.GETUSERS, payload: data }
}

export const addUser = (data) => {
  return { type: actionTypes.ADDUSER, payload: data }
}

export const deleteUser = (data) => {
  return { type: actionTypes.DELETEUSER, payload: data }
}

export function initializeStore (initialState = InitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}