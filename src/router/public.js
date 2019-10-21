import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

const Router = (props)=>{
    console.log(props);
    return (
        <div>
            <Switch>
                {
                    props.pathArr.map((val,i)=>{
                        if(val.path==='*'){
                            return  <Redirect key={i} to={val.redirect} />
                        }else{
                            return  <Route key={i} path={val.path} component={val.component}/>
                        }
                    })
                }


            </Switch>
        </div>
    )
};
export default Router
