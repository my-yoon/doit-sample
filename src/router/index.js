import Vue from "vue";
import VueRouter from "vue-router";
import pageRouter from "./modules/pageRouter"
Vue.use(VueRouter);

const router = new VueRouter({
	mode:"history",
	routes: [
		{
		 ...pageRouter
		},
	],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;