
const reportMan = {
    path: "/access",
    icon: "key",
    name: "access",
    title: "报表管理",
    redirect: "/access",
    children: [
      {
        path: "access",
        icon: "key",
        title: "充提报表",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      }
    ]
}

export default reportMan