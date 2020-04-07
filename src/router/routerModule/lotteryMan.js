


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
      },
      {
        path: "alert",
        icon: "key",
        title: "系统退水(信用)",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },
      {
        path: "alert",
        icon: "key",
        title: "系统退水(官方)",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },
      {
        path: "alert",
        icon: "key",
        title: "赔率设置(信用)",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },
      {
        path: "alert",
        icon: "key",
        title: "赔率设置(官方)",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },
      {
        path: "alert",
        icon: "key",
        title: "生肖设置",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },
      {
        path: "alert",
        icon: "key",
        title: "时间设置",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },
      {
        path: "alert",
        icon: "key",
        title: "未结算注单",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },
      {
        path: "alert",
        icon: "key",
        title: "即时注单",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },
      {
        path: "alert",
        icon: "key",
        title: "注单记录",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },
      {
        path: "alert",
        icon: "key",
        title: "注单分析",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },
      {
        path: "alert",
        icon: "key",
        title: "彩票输赢记录",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },
      {
        path: "alert",
        icon: "key",
        title: "默认玩法设置",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },
      {
        path: "alert",
        icon: "key",
        title: "六合彩历史注单",
        name: "alert",
        component: () => import('@/views/components/Alert')
      },

    ]
}

export default lotteryManagement

