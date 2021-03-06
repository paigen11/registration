import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
import UpdateUser from './components/UpdateUser';

class Main extends Component {
    render(){
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route path='/userProfile/:username' component={Profile} />
                    <Route path='/updateUser/:username' component={UpdateUser} />
                </Switch>
            </main>
        )
    }
}

export default Main;