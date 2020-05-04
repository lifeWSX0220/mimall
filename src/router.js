import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home';
import Index from './pages/index';
import Login from './pages/login';
import Product from './pages/product';
import Detail from './pages/detail';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    component:Index,
                    name:'index'
                },
                {
                    path:'/product/:id',
                    component:Product,
                    name:'product'
                },
                {
                    path:'/detail/:id',
                    component:Detail,
                    name:'detail'
                }
            ]
        },
        {
            path:'/login',
            name:'login',
            component:Login
        }
    ]
})