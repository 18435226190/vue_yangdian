import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
class Class extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <h1>影评：</h1>
                    <ul>
                        {/*<li><NavLink to="/detail/0001">我和我的祖国</NavLink></li>*/}
                        {/*<li><NavLink to="/detail/0002">战狼2</NavLink></li>*/}
                        {/*<li><NavLink to="/detail/0003">我的少女时代</NavLink></li>*/}
                        {/*<li><NavLink to={*/}
                            {/*{*/}
                                {/*pathname:'/detail',*/}
                                {/*query:{*/}
                                    {/*qid:'我和我的祖国'*/}
                                {/*}*/}
                            {/*}*/}
                        {/*}>我和我的祖国</NavLink></li>*/}
                        <li><NavLink to={
                            {
                                pathname:'/detail',
                                state:{
                                    sid:'我和我的祖国'
                                }
                            }
                        }>我和我的祖国</NavLink></li>
                        <li><NavLink to={
                            {
                            pathname:'/detail',
                            state:{
                                sid:'战狼2'
                            }
                            }
                        }>战狼2</NavLink></li>
                        <li><NavLink to={
                            {
                            pathname:'/detail',
                            state:{
                                sid:'我的少女时代'}
                            }
                        }>我的少女时代</NavLink></li>
                        <li> <button onClick={this.linkTo1.bind(this)}>哪吒</button></li>
                        <li> <button onClick={this.linkTo2.bind(this)}>攀登者</button></li>
                        <li> <button onClick={this.link.bind(this)}>返回</button></li>
                    </ul>
                </div>
            </div>
        )
    }
    linkTo1(){
        this.props.history.push({
            pathname:'/detail',
            state:{
                sid:"哪吒"
            }
        })
    }
    linkTo2(){
        this.props.history.replace({
            pathname:'/detail',
            state:{
                sid:"攀登者"
            }
        })
    }
    link(){
        this.props.history.go(-1)
    }

}

export default Class;