import Layout from '@/views/layout/Layout';

const dividendMan = {
    path: "/bonus",
    icon: "key",
    name: "access",
    title: "分红管理",
    component: Layout,
    children: [
      {
        path: "config",
        icon: "key",
        title: "代理分红配置",
        name: "BonusConfig",
        component: () => import('@/views/bonusMan/BonusConfig')
      },
      {
        path: "periods",
        icon: "key",
        title: "期数配置",
        name: "BonusPeriods",
        component: () => import('@/views/bonusMan/BonusPeriods')
      },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "分红统计",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "日工资配置",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "日工资期数",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "日工资统计",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // }
    ]
}

export default dividendMan
