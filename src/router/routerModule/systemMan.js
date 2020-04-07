import Layout from '@/views/layout/Layout';
const management = {
    path: '/system',
    icon: "speedometer",
    title: '系统管理',
    name: 'System',
    component: Layout,
    children: [
        {
        path: "groupman",
        icon: "speedometer",
        title: "分组管理",
        name: "Groupman",
        component: () => import('@/views/systemMan/GroupMan.vue')
        },
        {
        path: "limitlist",
        icon: "speedometer",
        title: "限制信息配置",
        name: "LimitList",
        component: () => import('@/views/systemMan/LimitList.vue')
        },
        {
        path: "accountIp",
        icon: "speedometer",
        title: "会员ip黑名单配置",
        name: "AccountIp",
        component: () => import('@/views/systemMan/AccountIp')
        },
        {
        path: "versionrecord",
        icon: "speedometer",
        title: "版本记录",
        name: "VersionRecord",
        component: () => import('@/views/systemMan/VersionRecord')
        },
        // {
        // path: "home",
        // icon: "speedometer",
        // title: "身份验证器配置",
        // name: "home index",
        // component: () => import('@/views/home/home')
        // },
        // {
        // path: "home",
        // icon: "speedometer",
        // title: "系统配置",
        // name: "home index",
        // component: () => import('@/views/home/home')
        // },
        // {
        // path: "home",
        // icon: "speedometer",
        // title: "监控",
        // name: "home index",
        // component: () => import('@/views/home/home')
        // },
        // {
        // path: "home",
        // icon: "speedometer",
        // title: "公众号配置",
        // name: "home index",
        // component: () => import('@/views/home/home')
        // },
        // {
        // path: "home",
        // icon: "speedometer",
        // title: "微信推广配置",
        // name: "home index",
        // component: () => import('@/views/home/home')
        // },
        // {
        // path: "home",
        // icon: "speedometer",
        // title: "推广域名配置",
        // name: "home index",
        // component: () => import('@/views/home/home')
        // },
        // {
        // path: "home",
        // icon: "speedometer",
        // title: "IP白名单",
        // name: "home index",
        // component: () => import('@/views/home/home')
        // },
        // {
        // path: "home",
        // icon: "speedometer",
        // title: "银行卡黑名单",
        // name: "home index",
        // component: () => import('@/views/home/home')
        // },
        // {
        // path: "home",
        // icon: "speedometer",
        // title: "网络检测",
        // name: "home index",
        // component: () => import('@/views/home/home')
        // },

    ]

}

export default management
