
import Home from '../components/Home'
import Class from '../components/class'
import Order from '../components/order'
import Me from '../components/me'

const pathArr=[
    {
        path:'/index/home',
        component:Home
    },
    {
        path:'/index/class',
        component:Class
    },
    {
        path:'/index/order',
        component:Order
    },
    {
        path:'/index/me',
        component:Me
    },
    {
        path:'*',
        redirect:'/index/home'
    },
];

export default pathArr