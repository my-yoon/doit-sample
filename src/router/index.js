import Vue from "vue";
import VueRouter from "vue-router";
import pageRouter from "./modules/pageRouter"
Vue.use(VueRouter);


const constantRoutes = [
	{
		path: "/",
		name: "home",
		redirect: "/main",
		
	}
]
const router = new VueRouter({
	mode:"history",
	routes: [
		...constantRoutes,
		pageRouter
	],
	scrollBehavior (to, from, savedPosition) {
		return new Promise((resolve, reject) => {
		  setTimeout(() => {
			resolve({ x: 0, y: 0 })
		  }, 0)
		})
	}
});

export default router;
