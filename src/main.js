import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
// Prime Vue Components

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

// Register Components
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)

const ws_conn = 'wss://city-ws.herokuapp.com'
const socket = new WebSocket(ws_conn, ['websocket'])
socket.addEventListener('message', function(event) {
  if (typeof event.data === 'string') {
    store.dispatch('updateCities', JSON.parse(event.data))
  }
})
