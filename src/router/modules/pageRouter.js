const pageRouter = 	{ 
  path:"/",
	redirect: "/main",
	name:"layout",
	component:()=>import("@/layout/index.vue"),
		children: [
			{
				path: "/main",
				name:"main",
				component: () => import("@/views/main/main.vue"),
			},
		]
}
export default pageRouter;