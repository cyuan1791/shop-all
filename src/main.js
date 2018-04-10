// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VuePaginate from 'vue-pagination'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(VuePaginate)

var config = {
  apiKey: 'AIzaSyC9wTu5nmEENISBHHZjRE0A8drMYTTIPWE',
  authDomain: 'webasone-reddingca.firebaseapp.com',
  databaseURL: 'https://webasone-reddingca.firebaseio.com',
  projectId: 'webasone-reddingca',
  storageBucket: 'webasone-reddingca.appspot.com',
  messagingSenderId: '999980584930'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
