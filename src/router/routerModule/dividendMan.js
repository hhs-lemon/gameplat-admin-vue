
const dividendMan = {
    path: "/access",
    icon: "key",
    name: "access",
    title: "分红管理",
    redirect: "/access",
    children: [
      {
        path: "access",
        icon: "key",
        title: "代理分红配置",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      }
    ]
}

export default dividendMan