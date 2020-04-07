import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

/* layout */
import Layout from '../views/layout/Layout';

const Login = _import('login/login');

Vue.use(Router)

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 **/
import SystemMan from './routerModule/systemMan'
import LiveMan from './routerModule/liveMan'
import Promotions from './routerModule/promotions'
import LotteryMan from './routerModule/lotteryMan'
import SportsMan from './routerModule/sportsMan'
import ESports from './routerModule/eSports'
import CashSystem from './routerModule/cashSystem'
import UsersMan from './routerModule/usersMan'
import PaymentConfig from './routerModule/paymentConfig'
import ChatRoomMan from './routerModule/chatRoomMan'
import NoticeMan from './routerModule/noticeMan'
import LogsMan from './routerModule/logsMan'
import ReportMan from './routerModule/reportMan'
import DividendMan from './routerModule/dividendMan'



export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录'
    },
    hidden: true,
    component: resolve => {
      require(['../views/login/login.vue'], resolve);
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'home',
    hidden: true,
    children: [{path: 'home', title: 'home', name: 'home_index', component: _import('home/home')}]
  }
];

//默认控件
const defaultComponent = Layout;
//路由数据
// export const otherRouterMap = initRouter(require('../router/router.json'));
export const otherRouterMap = [
  SystemMan,
  LiveMan,
  Promotions,
  LotteryMan,
  SportsMan,
  ESports,
  CashSystem,
  UsersMan,
  PaymentConfig,
  ChatRoomMan,
  NoticeMan,
  LogsMan,
  ReportMan,
  DividendMan
]

/**
 * 初始化路由
 * @param router 路由文件，是一个数组
 */
function initRouter(router) {
  for (let i = 0; i < router.length; i++) {
    let route = router[i];
    //设置一级路由的控件为全局定义的默认控件
    route.component = defaultComponent;
    //设置子路由
    initChildrenRouter(route.children)
  }
  return router;
}

/**
 * 初始化子路由
 * @param router 子路由数组
 */
function initChildrenRouter(router) {
  for (let i = 0; i < router.length; i++) {
    let route = router[i];
    //初始化子路由的控件
    route.component = _import(route.component);
  }
}

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: [
    ...constantRouterMap,
    ...otherRouterMap
  ]
})


