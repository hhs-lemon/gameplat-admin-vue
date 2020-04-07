import Layout from '@/views/layout/Layout';

const usersMan = {
    path: "/users",
    icon: "key",
    name: "access",
    title: "用户管理",
    component: Layout,
    children: [
      {
        path: "userlist",
        icon: "key",
        title: "用户管理_会员管理",
        name: "UserList",
        component: () => import('@/views/usersMan/UserList')
      },
      {
        path: "adminzzh",
        icon: "key",
        title: "子账号",
        name: "Adminzzh",
        component: () => import('@/views/usersMan/Adminzzh')
      },
      // {
      //   path: "index",
      //   icon: "key",
      //   title: "在线人员",
      //   name: "accessAccess",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   icon: "key",
      //   title: "代理推广",
      //   name: "accessAccess",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   icon: "key",
      //   title: "返水黑名单",
      //   name: "accessAccess",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   icon: "key",
      //   title: "忘记密码信息",
      //   name: "accessAccess",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   icon: "key",
      //   title: "客户回访",
      //   name: "accessAccess",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   icon: "key",
      //   title: "用户层级",
      //   name: "accessAccess",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   icon: "key",
      //   title: "注单分析",
      //   name: "accessAccess",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   icon: "key",
      //   title: "会员劫持",
      //   name: "accessAccess",
      //   component: () => import('@/views/error-page/error-page')
      // }
    ]
}

export default usersMan
