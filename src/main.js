
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import FullCalendar from 'vue-fullcalendar';

import 'vue-material/dist/vue-material.css';

import App from './App';

const Calendar = () => import('./pages/Calendar');
const Tasks = () => import('./pages/Tasks');

Vue.component('full-calendar', FullCalendar);
const dependencies = [VueRouter, VueMaterial];
dependencies.map(dep => Vue.use(dep));

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/calendar', component: Calendar },
    { path: '/tasks', component: Tasks },
    { path: '*', component: Calendar },
  ],
});

Vue.material.registerTheme('default', {
  primary: 'deep-orange',
  accent: 'blue-grey',
  warn: 'blue-grey',
  background: 'white',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
