
const management = {
    path: '/dashboard',
    icon: "speedometer",
    redirect: 'noRedirect',
    title: '真人管理',
    name: 'dashboard',
    redirect: "/dashboard/index1",
    children: [
        {
        path: "index1",
        icon: "speedometer",
        title: "投注日报表",
        name: "home index",
        component: () => import('@/views/dashboard/index1')
        },
        {
        path: "index1",
        icon: "speedometer",
        title: "真人投注记录",
        name: "home index",
        component: () => import('@/views/dashboard/index1')
        },
        {
        path: "index1",
        icon: "speedometer",
        title: "返点配置",
        name: "home index",
        component: () => import('@/views/dashboard/index1')
        },
        {
        path: "index1",
        icon: "speedometer",
        title: "期数配置",
        name: "home index",
        component: () => import('@/views/dashboard/index1')
        },
        {
        path: "index1",
        icon: "speedometer",
        title: "返点统计",
        name: "home index",
        component: () => import('@/views/dashboard/index1')
        },
        {
        path: "index1",
        icon: "speedometer",
        title: "额度补发",
        name: "home index",
        component: () => import('@/views/dashboard/index1')
        },
        {
        path: "index1",
        icon: "speedometer",
        title: "额度回收",
        name: "home index",
        component: () => import('@/views/dashboard/index1')
        },
        {
        path: "index1",
        icon: "speedometer",
        title: "真人黑名单管理",
        name: "home index",
        component: () => import('@/views/dashboard/index1')
        },
        {
        path: "index1",
        icon: "speedometer",
        title: "真人游戏开关",
        name: "home index",
        component: () => import('@/views/dashboard/index1')
        },
        {
        path: "index1",
        icon: "speedometer",
        title: "真人游戏管理",
        name: "home index",
        component: () => import('@/views/dashboard/index1')
        }

    ]

}

export default management
