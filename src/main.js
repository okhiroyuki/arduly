import Vue from 'vue';
import VueGtag from 'vue-gtag';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './registerServiceWorker';

Vue.config.productionTip = false;
// Add unimported components to ignore list to prevent warnings.
Vue.config.ignoredElements = ['field', 'block', 'category', 'xml', 'mutation', 'value', 'sep'];

Vue.use(VueGtag, {
  config: { id: 'G-0X3L4Z9H78' },
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
