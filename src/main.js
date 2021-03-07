import Vue from 'vue';
import App from './App.vue';
import VueApollo from 'vue-apollo'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.process = { cwd: () => '' };

Vue.config.productionTip = false

require('dotenv').config()
         
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const TOKEN = process.env.VUE_APP_TOKEN;
const URI = process.env.VUE_APP_URI;
console.log(TOKEN);
console.log(URI);

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://api.annict.com/graphql',
  headers: {authorization: 'Bearer RXfnbi3w0faSCeZhdGUqBskkz49V3koiRITLZRxvA7k'}
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo)

new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
});