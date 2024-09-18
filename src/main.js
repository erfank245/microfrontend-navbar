import "./set-public-path";
import singleSpaVue from 'single-spa-vue';
import { createMemoryHistory, createRouter } from "vue-router";
import { h, createApp } from "vue";

import App from "./App.vue";

const routes = [
  { path: "/" }
];

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes,
})

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        links: this.links,
      });
    },
  },
  handleInstance: (app) => {
    app.use(router);
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
