import Layout from '@/views/layout/Layout';

const logsMan = {
    path: "/logs",
    icon: "key",
    name: "access",
    title: "日志管理",
    component: Layout,
    children: [
      {
        path: "userlogin",
        icon: "key",
        title: "登录日志",
        name: "UserLogin",
        component: () => import('@/views/logsMan/UserLogin')
      },
      {
        path: "operate",
        icon: "key",
        title: "操作日志",
        name: "OperateLog",
        component: () => import('@/views/logsMan/OperateLog')
      },

    ]
}

export default logsMan
