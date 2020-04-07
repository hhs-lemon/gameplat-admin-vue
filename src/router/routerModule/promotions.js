

const promotions = {
    path: "/access",
    icon: "key",
    name: "access",
    title: "优惠活动",
    redirect: "/access",
    children: [
      {
        path: "access",
        icon: "key",
        title: "参数设置",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "活动管理",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      }
    ]
}

export default promotions

