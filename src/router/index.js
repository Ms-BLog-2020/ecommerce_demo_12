import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/HelloWorld';
import Login from '@/components/pages/Login';
import Dashboard02 from '@/components/Dashboard02';
import Products from '@/components/pages/Products';
import CustomerOrders from '@/components/pages/CustomerOrders';
import HomeCustomerOrders from '@/components/pages/HomeCustomerOrders';
import HomeCustomerOrdersB from '@/components/pages/HomeCustomerOrdersB';
import HomeCustomerOrdersC from '@/components/pages/HomeCustomerOrdersC';
import AdminFinishPay from '@/components/pages/AdminFinishPay';
import Coupon from '@/components/pages/Coupon';
import HomeCouponActivity from '@/components/pages/HomeCouponActivity';
import HomeCouponHoliday from '@/components/pages/HomeCouponHoliday';
import HomeCouponEarlybird from '@/components/pages/HomeCouponEarlybird';


import Checkout from '@/components/Checkout';
import Productdetail from '@/components/Productdetail';
import CheckoutFinishPay from '@/components/CheckoutFinishPay';
import LandingPage from '@/components/LandingPage';
import EventPage from '@/components/EventPage';
import HomeCouponPage from '@/components/HomeCouponPage';
import BookingCalender from '@/components/BookingCalender';

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '*',
            redirect: '/home', //避免用戶去不存在的頁面
        },
        
        {
            name: 'Home',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'HomeCustomerOrders',
                    path: '',
                    component: HomeCustomerOrders,
                },
                {
                    name: 'HomeCustomerOrdersB',
                    path: '/customer_orders_b',
                    component: HomeCustomerOrdersB,
                },
                {
                    name: 'HomeCustomerOrdersC',
                    path: '/customer_orders_c',
                    component: HomeCustomerOrdersC,
                },
                
                
            ]
        },
        {
            name: 'LandingPage',
            path: '/',
            component: LandingPage,
        },
        {
            name: 'EventPage',
            path: '/event_page',
            component: EventPage,
        },
        {
            name: 'BookingCalender',
            path: '/booking',
            component: BookingCalender,
        },
        {
            name: 'Checkout',
            path: '/checkout',
            component: Checkout,
        },
        {
            name: 'CheckoutFinishPay',
            path: '/checkout_finish_pay/:orderId',
            component: CheckoutFinishPay,
        },
        {
            name: 'Productdetail',
            path: '/productdetail/:prodId',
            component: Productdetail,
        },
        {
            name: 'HomeCouponPage',
            path: '/home_coupon',
            component: HomeCouponPage,
            children: [
                {
                    name: 'HomeCouponActivity',
                    path: '',
                    component: HomeCouponActivity,
                },
                {
                    name: 'HomeCouponHoliday',
                    path: '/holiday',
                    component: HomeCouponHoliday,
                },
                {
                    name: 'HomeCouponEarlybird',
                    path: '/early_bird',
                    component: HomeCouponEarlybird,
                },
               
                
                
            ]
        },
        {
            name: 'Login',
            path: '/login',
            component: Login,
        },
        {
            name: 'HelloWorld',
            path: '/admin',
            component: Dashboard02,
            children: [
                {
                    name: 'Products',
                    path: 'products',
                    component: Products,
                    meta: { requiresAuth: true } //確保進入頁面前有經過驗證
                },
                {
                    name: 'AdminFinishPay',
                    path: 'admin_finish_pay',
                    component: AdminFinishPay,
                    meta: { requiresAuth: true } //確保進入頁面前有經過驗證
                },
                {
                    name: 'Coupon',
                    path: 'coupon',
                    component: Coupon,
                    meta: { requiresAuth: true } //確保進入頁面前有經過驗證
                },
            ]
        },
        {
            name: 'Dashboard02',
            path: '/admin',
            component: Dashboard02,
            children: [
                {
                    name: 'CustomerOrders',
                    path: 'customer_order',
                    component: CustomerOrders,
                },
            ]
        },
    ]
});