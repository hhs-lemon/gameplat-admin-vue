
const noticeMan = {
    path: "/access",
    icon: "key",
    name: "access",
    title: "公告管理",
    redirect: "/access",
    children: [
      {
        path: "access",
        icon: "key",
        title: "公告信息",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "个人消息",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      }
    ]
}

export default noticeMan
