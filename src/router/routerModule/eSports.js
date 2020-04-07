import Layout from '@/views/layout/Layout';
const eSports = {
    path: "/esports",
    icon: "key",
    name: "access",
    title: "电子竞技",
    component: Layout,
    children: [
      {
        path: "order",
        icon: "key",
        title: "注单查询",
        name: "Order",
        component: () => import('@/views/esportsMan/Order')
      },
      {
        path: "betconfig",
        icon: "key",
        title: "投注设置",
        name: "BetConfig",
        component: () => import('@/views/esportsMan/BetConfig')
      },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "即时注单",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "单用户投注限制",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "用户盈利报表",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // }
    ]
}

export default eSports
