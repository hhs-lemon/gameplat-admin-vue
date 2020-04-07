

const usersMan = {
    path: "/error-page",
    icon: "key",
    name: "access",
    title: "用户管理",
    redirect: "/access",
    // hidden: true,
    children: [
      {
        path: "index",
        icon: "key",
        title: "用户管理_会员管理",
        name: "accessAccess",
        component: () => import('@/views/error-page/error-page')
      }
    ]
}

export default usersMan