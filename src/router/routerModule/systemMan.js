

const management = {
    path: '/home',
    icon: "speedometer",
    redirect: 'noRedirect',
    title: '系统管理',
    name: 'home',
    redirect: "/home/home",
    children: [
        {
        path: "home",
        icon: "speedometer",
        title: "分组管理",
        name: "home index",
        component: () => import('@/views/home/home')
        },
        {
        path: "home",
        icon: "speedometer",
        title: "限制信息配置",
        name: "home index",
        component: () => import('@/views/home/home')
        },
        {
        path: "home",
        icon: "speedometer",
        title: "会员ip黑名单配置",
        name: "home index",
        component: () => import('@/views/home/home')
        },
        {
        path: "home",
        icon: "speedometer",
        title: "版本记录",
        name: "home index",
        component: () => import('@/views/home/home')
        },
        {
        path: "home",
        icon: "speedometer",
        title: "身份验证器配置",
        name: "home index",
        component: () => import('@/views/home/home')
        },
        {
        path: "home",
        icon: "speedometer",
        title: "系统配置",
        name: "home index",
        component: () => import('@/views/home/home')
        },
        {
        path: "home",
        icon: "speedometer",
        title: "监控",
        name: "home index",
        component: () => import('@/views/home/home')
        },
        {
        path: "home",
        icon: "speedometer",
        title: "公众号配置",
        name: "home index",
        component: () => import('@/views/home/home')
        },
        {
        path: "home",
        icon: "speedometer",
        title: "微信推广配置",
        name: "home index",
        component: () => import('@/views/home/home')
        }
    ]

}

export default management
