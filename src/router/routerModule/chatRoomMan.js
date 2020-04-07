

const chatRoomMan = {
    path: "/access",
    icon: "key",
    name: "access",
    title: "聊天室管理",
    redirect: "/access",
    children: [
      {
        path: "access",
        icon: "key",
        title: "聊天室成员管理",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      }
    ]
}

export default chatRoomMan