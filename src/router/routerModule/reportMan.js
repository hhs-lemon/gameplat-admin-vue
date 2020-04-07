
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
      },
      {
        path: "access",
        icon: "key",
        title: "IP分析",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "彩票输赢明细",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "数据统计",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "用户活跃度",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "投注额报表",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "体育输赢明细",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "代理统计报表",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "会员账目",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "日报表",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "一般报表",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      }
    ]
}

export default reportMan
