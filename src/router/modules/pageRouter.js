const withPrefix = (prefix, routes) => routes.map(route => {
  route.path = prefix + route.path;
  return route;
});
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
    },
    ...withPrefix('/book', [
      {
        path:"/",
        component: () => import("@/views/Book.vue"),
      }, {
        name: 'book',
        path: '/book:tabId',
        component:()=>import("@/views/Book.vue")
      }
    ]),
    {
      path:"/reference",
      name:"reference",
      component: () => import("@/views/reference.vue"),
    },{
      path:"/movieclass",
      name:"movieclass",
      component: () => import("@/views/movieclass.vue"),
    },{
      path:"/classsample",
      name:"classsample",
      component: () => import("@/views/classsample.vue"),
    },{
      path:"/company",
      name:"/company",
      component: () => import("@/views/company.vue"),
    }
	]	
}
export default pageRouter;