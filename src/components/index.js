import React from 'react'
import {NavLink} from 'react-router-dom'
import Router from '../router/public'
import pathArr from '../router/index'

import '../App.css'
class Index extends React.Component {
    render() {
        return (
            <div>
            <div id="home">
                <NavLink to="/index/home" activeClassName="act">首页</NavLink>
                <NavLink to="/index/class" activeClassName="act">分类</NavLink>
                <NavLink to="/index/order" activeClassName="act">排行</NavLink>
                <NavLink to="/index/me" activeClassName="act">我</NavLink>
            </div>
                <Router pathArr={pathArr}/>
            </div>
        )
    }

}
export default Index;
