const pageRouter = 	{ 
	path:"/",
	redirect: "/main",
	name:"layout",
	component:()=>import("@/layout/index.vue"),
	
}

export default pageRouter;