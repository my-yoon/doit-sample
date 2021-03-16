const pageRouter = 	{ 
  path:"/",
	name:"layout",
  redirect: "/main",
	component:()=>import("@/layout/index.vue"),
	children: [
		{
      path:"/main",
      name:"main",
      component: () => import("@/views/main/index.vue"),
    }
	]	
}
export default pageRouter;