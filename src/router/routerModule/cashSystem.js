
const cashStytem = {
    path: "/access",
    icon: "key",
    name: "access",
    title: "现金系统",
    redirect: "/access",
    // hidden: true,
    children: [
      {
        path: "access",
        icon: "key",
        title: "待处理入款",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "入款记录",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "待处理出款",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "出款记录",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "人工出入款",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "现金流水",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "打码量审核",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      }
    ]
}

export default cashStytem
