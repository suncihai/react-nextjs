import {
  Observable,
  Subject
} from 'rxjs';
import {
  breakDownHostUrl
} from './utils'

let wsSubject
let ws; //websocket实例
let lockReconnect = false; //避免重复连接
let wsUrl = 'wss://ws-manager-v2-dev-d981hkl2m.bitmart.com'

let subItems = [];

export const websocketSub = {
  createSubject(subscribeObj) {
    if (!wsSubject) {
      wsSubject = getWsSubject()
    }
    if (!ws) {
      ws = getWebSocketInstance()
    }

    if (ws && +ws.readyState === 1) {
      ws.send(JSON.stringify(subscribeObj))
      // cancel 不加监听
      if (subscribeObj.subscribe.indexOf('_cancel') >= 0) {
        return wsSubject
      }
    }

    let rmIndex = subItems.findIndex((item, rmIndex) => {
      if (item.subscribe === subscribeObj.subscribe) {
        const keysArr = Object.keys(item.subscribeObj)
        let allEqual = true
        keysArr.forEach((key) => {
          if (item.subscribeObj[key] !== subscribeObj[key]) {
            allEqual = false
          }
        })
        if (allEqual) {
          return true
        }
      }
    })
    //如果未找到
    if (rmIndex < 0) {
      subItems.push({
        subscribe: subscribeObj.subscribe,
        subscribeObj,
      });
    }
    return wsSubject
  },
  // 不要直接操作其中元素
  getSubItems() {
    return subItems
  },
  getSocketSub() {
    if (!wsSubject) {
      wsSubject = getWsSubject()
    }

    return wsSubject
  },
}

const getWsSubject = () => {
  if (!wsSubject) {
    wsSubject = new Subject()
  }
  return wsSubject
}
const getWebSocketInstance = () => {
  try {
    ws = new WebSocket(wsUrl);
    initEventHandle();
    return ws;
  } catch (e) {
    console.log(e)
    reconnect();
  }
}

const initEventHandle = () => {
  ws.onclose = () => {
    reconnect();
  };
  ws.onerror = () => {
    reconnect();
  };
  ws.onopen = () => {
    //心跳检测重置
    heartCheck.reset().start();
    subItems.forEach((sub) => {
      ws.send(JSON.stringify(sub.subscribeObj))
    })
    // 去掉cacel
    subItems = subItems.filter((sub) => sub.subscribe.indexOf('_cancel') < 0)
  };
  ws.onmessage = event => {
    if (!wsSubject) {
      return
    }
    if (event.data) {
      try {
        const wsres = JSON.parse(event.data)
        wsSubject.next(wsres)
      } catch (e) {
        console.log(e)
      }
    }
  }
}

const reconnect = () => {
  if (lockReconnect) return;
  lockReconnect = true;
  //没连接上会一直重连，设置延迟避免请求过多
  setTimeout(() => {
    getWebSocketInstance();
    lockReconnect = false;
  }, 1000);
}

//心跳检测
const heartCheck = {
  timeout: 20000,
  timeoutInt: null,
  reset() {
    clearTimeout(this.timeoutInt);
    return this;
  },
  start() {
    this.timeoutInt = setInterval(() => {
      //这里发送一个心跳，后端收到后，返回一个心跳消息，
      //onmessage拿到返回的心跳就说明连接正常
      try {
        ws.send('{"subscribe": "ping"}');
      } catch (e) {
        console.log(e);
      }

    }, this.timeout)
  }
}
