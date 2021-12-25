import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store/index.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;
Vue.use(BootstrapVue, IconsPlugin)
Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
