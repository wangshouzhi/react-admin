import React, {Component} from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from '../App'
import Login from '../page/login/login'
import Admin from '../admin'
import Buttons from '../page/ui/button/button'
import Home from '../page/home/home'

export default class Router extends Component {
    render () {
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/' render={()=>
                           <Admin>
                               <Route path='/admin/home' component={Home}></Route>
                               <Route path='/admin/ui/buttons' component={Buttons}></Route>
                           </Admin>
                        }></Route>
                    </Switch>
                   
                </App>
            </HashRouter>
        )
           
    }
}