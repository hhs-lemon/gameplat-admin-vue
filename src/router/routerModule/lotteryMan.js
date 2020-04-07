


const lotteryManagement = {
    path: "/components",
    icon: "key",
    name: "access",
    title: "彩票管理",
    redirect: "/components",
    children: [
      {
        path: "buttons",
        icon: "key",
        title: "开奖结果",
        name: "components",
        component: () => import('@/views/components/Buttons')
      },
      {
        path: "alert",
        icon: "key",
        title: "彩票设置",
        name: "alert",
        component: () => import('@/views/components/Alert')
      }
    ]
}

export default lotteryManagement

