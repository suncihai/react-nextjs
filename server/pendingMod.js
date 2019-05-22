const pendingRecord = {}

const pullPromise = (paramKey, createPromiseFn) => {
  let retPromise
  if (pendingRecord[paramKey] && pendingRecord[paramKey].isPending) {
    // 已经在 pending 状态
    retPromise = pendingRecord[paramKey].promise
  } else {
    // 没有过 产生新的promise
    retPromise = createPromiseFn()
    pendingRecord[paramKey] = {
      isPending: true,
      promise: retPromise,
    }
  }

  return retPromise
}

module.exports = {
  pendingRecord,
  pullPromise,
}
