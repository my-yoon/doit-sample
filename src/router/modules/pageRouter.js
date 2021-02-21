const pageRouter = 	{ 
	path:"/",
	name:"layout",
	component:()=>import("@/layout/main/index.vue"),
	children: [
		{
			path: "/",
			redirect: "/main",
		},
		{
			path: "/main",
			name:"main",
			component: () => import("@/views/main/index.vue"),
		},
		{
			path: "/book",
			name:"book",
			component: () => import("@/views/subpage/book.vue"),
		},
		{
			path: "/reference",
			name:"reference",
			component: () => import("@/views/subpage/reference.vue"),
		},
		{
			path: "/movieclass",
			name:"movieclass",
			component: () => import("@/views/subpage/movieclass.vue"),
		},
		{
			path: "/classsample",
			name:"classsample",
			component: () => import("@/views/subpage/classsample.vue"),
		},
		{
			path: "/company",
			name:"company",
			component: () => import("@/views/subpage/company.vue"),
		}
		
		
	],
}

export default pageRouter;