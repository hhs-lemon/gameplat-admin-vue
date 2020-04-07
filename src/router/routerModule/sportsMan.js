import Layout from '@/views/layout/Layout';
const sportsMan = {
    path: "/sports",
    icon: "key",
    name: "access",
    title: "体育管理",
    component: Layout,
    children: [
      {
        path: "bets",
        icon: "key",
        title: "体育注单查询",
        name: "SportBets",
        component: () => import('@/views/sportsMan/SportBets')
      },
      {
        path: "curbets",
        icon: "key",
        title: "即时注单",
        name: "SportCurBets",
        component: () => import('@/views/sportsMan/SportCurBets')
      },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "投注设置",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "参数设置",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "手工结算",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "输入赛果",
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
      // },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "联赛查询",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // }
    ]
}

export default sportsMan
