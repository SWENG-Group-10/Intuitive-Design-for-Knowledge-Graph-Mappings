import Vue from "vue";
// import App from './App.vue'
import vuetify from "./plugins/vuetify";
import hljs from "highlight.js";

Vue.config.productionTip = false;
// const NotFound= { template:'<p>Not found</p>'}
//const Ttl = { template:"<p>ttl</p>" };

const routes = {
  "/ttl": "./graph",
  "/Intuitive-Design-for-Knowledge-Graph-Mappings/ttl": "./graph",
  "/": "./App",
};

Vue.directive("highlightjs", {
  deep: true,
  bind: function(el, binding) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll("code");
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value;
      }
      hljs.highlightBlock(target);
    });
  },
  componentUpdated: function(el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll("code");
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value;
        hljs.highlightBlock(target);
      }
    });
  },
});
const app = new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      console.log(routes[this.currentRoute]);
      const matchingView = routes[this.currentRoute];
      return matchingView
        ? require(matchingView + ".vue").default
        : require("./App.vue").default;
    },
  },
  vuetify,
  //render: h => h(App)
  render(h) {
    return h(this.ViewComponent);
  },
}); //.$mount('#app')

window.addEventListener("popstate", () => {
  app.currentRoute = window.location.pathname;
});
