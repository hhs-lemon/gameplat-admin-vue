
const cashStytem = {
    path: "/access",
    icon: "key",
    name: "access",
    title: "现金系统",
    redirect: "/access",
    // hidden: true,
    children: [
      {
        path: "access",
        icon: "key",
        title: "待处理入款",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      },
      {
        path: "access",
        icon: "key",
        title: "待处理入款2",
        name: "accessAccess",
        component: () => import('@/views/access/access')
      }
    ]
}

export default cashStytem