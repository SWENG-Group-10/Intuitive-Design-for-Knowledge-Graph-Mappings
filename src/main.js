import Vue from 'vue'
// import App from './App.vue'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
// const NotFound= { template:'<p>Not found</p>'}
//const Ttl = { template:"<p>ttl</p>" };

const routes = { 
  '/ttl': './graph',
  '/Intuitive-Design-for-Knowledge-Graph-Mappings/ttl': './graph',
  '/': './App'
}
const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      console.log(routes[this.currentRoute])
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require(matchingView + '.vue').default
        : require ('./App.vue').default
    }
  },
  vuetify,
  //render: h => h(App)
  render (h) {return h(this.ViewComponent)}
 })//.$mount('#app')

 window.addEventListener('popstate',() =>{
   app.currentRoute = window.location.pathname
 })