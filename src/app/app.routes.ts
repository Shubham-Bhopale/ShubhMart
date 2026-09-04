import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetails } from './pages/product-details/product-details';
import { Checkout } from './pages/checkout/checkout';
import { MyOrders } from './pages/my-orders/my-orders';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'home',
        pathMatch:'full' 
    },
    {
        path:'home',
        component:Home
    },
    {
        path:'products',
        component:ProductList
    },
    {
        path:'open-product/:id',
        component:ProductDetails
    },
    {
        path:'checkout',
        component:Checkout
    },
    {
        path:'my-orders',
        component:MyOrders
    },
    // {
    //     path:'login',
    //     component:Login
    // },
    // {
    //     path:'login',
    //     component:Login
    // },
    // {
    //     path:'login',
    //     component:Login
    // }
];
