import Layout from '@/views/layout/Layout';
const cashStytem = {
    path: "/recharge",
    icon: "key",
    name: "access",
    title: "现金系统",
    component: Layout,
    children: [
      {
        path: "order",
        icon: "key",
        title: "待处理入款",
        name: "RechargeOrder",
        component: () => import('@/views/cashSystem/RechargeOrder')
      },
      {
        path: "history",
        icon: "key",
        title: "入款记录",
        name: "OrderHistory",
        component: () => import('@/views/cashSystem/OrderHistory')
      },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "待处理出款",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "出款记录",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "人工出入款",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "现金流水",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "打码量审核",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // }
    ]
}

export default cashStytem
