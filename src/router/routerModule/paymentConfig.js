import Layout from '@/views/layout/Layout';

const paymentConfig = {
    path: "/payment",
    icon: "android-sad",
    title: "出入款配置",
    name: "errorPage",
    component: Layout,
    children: [
      {
        path: "recharge",
        title: "充值限制",
        name: "RechargeConfig",
        icon: "android-sad",
        component: () => import('@/views/paymentMan/RechargeConfig')
      },
      {
        path: "payaccount",
        title: "收款账户",
        name: "PayAccount",
        icon: "android-sad",
        component: () => import('@/views/paymentMan/PayAccount')
      },
      // {
      //   path: "index",
      //   title: "入款商户配置",
      //   name: "errorPage_index",
      //   icon: "android-sad",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   title: "第三方入款接口",
      //   name: "errorPage_index",
      //   icon: "android-sad",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   title: "在线支付通道",
      //   name: "errorPage_index",
      //   icon: "android-sad",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   title: "支付方式",
      //   name: "errorPage_index",
      //   icon: "android-sad",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   title: "优惠类型配置",
      //   name: "errorPage_index",
      //   icon: "android-sad",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   title: "会员银行",
      //   name: "errorPage_index",
      //   icon: "android-sad",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   title: "出款商户配置",
      //   name: "errorPage_index",
      //   icon: "android-sad",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   title: "第三方出款接口",
      //   name: "errorPage_index",
      //   icon: "android-sad",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   title: "快捷回复配置",
      //   name: "errorPage_index",
      //   icon: "android-sad",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   title: "公众号参数配置",
      //   name: "errorPage_index",
      //   icon: "android-sad",
      //   component: () => import('@/views/error-page/error-page')
      // },
      // {
      //   path: "index",
      //   title: "支付排行榜",
      //   name: "errorPage_index",
      //   icon: "android-sad",
      //   component: () => import('@/views/error-page/error-page')
      // },

    ]
}

export default paymentConfig
