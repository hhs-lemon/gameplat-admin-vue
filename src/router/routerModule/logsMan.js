
const logsMan = {
    path: "/access",
    icon: "key",
    name: "access",
    title: "日志管理",
    redirect: "/access",
    children: [
      {
        path: "access",
        icon: "key",
        title: "登录日志",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      }
    ]
}

export default logsMan