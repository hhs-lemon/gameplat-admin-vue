
const paymentConfig = {
    path: "/error-page",
    icon: "android-sad",
    title: "出入款配置",
    name: "errorPage",
    children: [
      {
        path: "index",
        title: "充值限制",
        name: "errorPage_index",
        icon: "android-sad",
        component: () => import('@/views/error-page/error-page')
      }
    ]
}

export default paymentConfig