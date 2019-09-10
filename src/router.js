import React , {Component} from 'react';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import App from './App'
import Admin from 'pages/admin'
import Login from 'pages/login'
import Food from 'pages/food'
import User from 'pages/user'

class RootRouter extends Component{
    render(){
        return(
            <App>

            <HashRouter>
                <Switch>
                    <Redirect exact from = '/' to = '/admin'></Redirect>
                    <Route path = '/admin' render = {()=>{
                        return (
                            <Admin>
                                <Route path = '/admin/food' component = {Food}></Route>
                                <Route path = '/admin/user' component = {User}></Route>
                            </Admin>
                        )
                    }}></Route>
                    <Route path = '/login' component = {Login}></Route>
                </Switch>
            </HashRouter>
            </App>
        )
    }
}
export default RootRouter