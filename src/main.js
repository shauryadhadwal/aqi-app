import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

const ws_conn = 'wss://city-ws.herokuapp.com'
const socket = new WebSocket(ws_conn, ['websocket'])
socket.addEventListener('message', function(event) {
  if (typeof event.data === 'string') {
    store.dispatch('updateCities', JSON.parse(event.data))
  }
})
