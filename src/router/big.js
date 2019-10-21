
import Index from '../components/index'
import Detail from '../components/detail'
const pathArr=[
    {
        path:'/index',
        component:Index
    },
    // {
    //     path:'/detail/:id',
    //     component:Detail
    // },
    {
        path:'/detail/',
        component:Detail
    },
    {
        path:'*',
        redirect:'/index'
    },
];
export default pathArr

