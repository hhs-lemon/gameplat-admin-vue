
const sportsMan = {
    path: "/access",
    icon: "key",
    name: "access",
    title: "体育管理",
    redirect: "/access",
    children: [
      {
        path: "access",
        icon: "key",
        title: "体育注单查询",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "即时注单",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      }
    ]
}

export default sportsMan