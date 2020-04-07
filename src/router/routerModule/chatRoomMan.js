import Layout from '@/views/layout/Layout';

const chatRoomMan = {
    path: "/chatroom",
    icon: "key",
    name: "access",
    title: "聊天室管理",
    component: Layout,
    children: [
      {
        path: "chatuser",
        icon: "key",
        title: "聊天室成员管理",
        name: "ChatUser",
        component: () => import('@/views/chatroomMan/ChatUser')
      },
      {
        path: "chatroomcon",
        icon: "key",
        title: "聊天室房间管理",
        name: "ChatRoomCon",
        component: () => import('@/views/chatroomMan/ChatRoomCon')
      },
      // {
      //   path: "access",
      //   icon: "key",
      //   title: "聊天室红包配置",
      //   name: "accessAccess",
      //   component: () => import('@/views/access/access')
      // }
    ]
}

export default chatRoomMan
