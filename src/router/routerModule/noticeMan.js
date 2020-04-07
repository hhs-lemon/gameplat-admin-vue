import Layout from '@/views/layout/Layout';

const noticeMan = {
    path: "/notice",
    icon: "key",
    name: "access",
    title: "公告管理",
    component: Layout,
    children: [
      {
        path: "usernotice",
        icon: "key",
        title: "公告信息",
        name: "UserNotice",
        component: () => import('@/views/noticeMan/UserNotice')
      },
      {
        path: "usermessage",
        icon: "key",
        title: "个人消息",
        name: "UserMessage",
        component: () => import('@/views/noticeMan/UserMessage')
      }
    ]
}

export default noticeMan
