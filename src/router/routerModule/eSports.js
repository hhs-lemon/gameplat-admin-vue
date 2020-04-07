
const eSports = {
    path: "/access",
    icon: "key",
    name: "access",
    title: "电子竞技",
    redirect: "/access",
    // hidden: true,
    children: [
      {
        path: "access",
        icon: "key",
        title: "注单查询",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "投注设置",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      }
    ]
}

export default eSports