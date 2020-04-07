
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
      },
      {
        path: "access",
        icon: "key",
        title: "期数配置",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "分红统计",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "日工资配置",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "日工资期数",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "日工资统计",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      }
    ]
}

export default dividendMan
