import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './styles/main.css'
// Prime Vue Components

import Tooltip from 'primevue/tooltip'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Button from 'primevue/button'
import Chart from 'primevue/chart'
import Card from 'primevue/card'

const app = createApp(App)
// Register Middlewares
app.use(store)
app.use(router)
// Register Components
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Button', Button)
app.component('Chart', Chart)
app.component('Card', Card)
app.directive('tooltip', Tooltip)
// Mount App
app.mount('#app')

const ws_conn = process.env.VUE_APP_SOCKET_CONN
const socket = new WebSocket(ws_conn, ['websocket'])
socket.addEventListener('message', function(event) {
  if (typeof event.data === 'string') {
    store.dispatch('updateCities', JSON.parse(event.data))
  }
})
