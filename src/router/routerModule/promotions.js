import Layout from '@/views/layout/Layout';

const promotions = {
    path: "/activity",
    icon: "key",
    name: "access",
    title: "优惠活动",
    component: Layout,
    children: [
      {
        path: "config",
        icon: "key",
        title: "参数设置",
        name: "ActivityConfig",
        component: () => import('@/views/promotions/ActivityConfig')
      },
      {
        path: "manage",
        icon: "key",
        title: "活动管理",
        name: "ActivityMange",
        component: () => import('@/views/promotions/ActivityManage')
      },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "规则管理",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "资格管理",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "活动派奖",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // }
    ]
}

export default promotions

