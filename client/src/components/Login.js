import React, { Component } from 'react';
import { Input, Row, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';

class Login extends Component {
    constructor(){
        super();
        this.setState = {
            pageTitle: "Login Screen"
        }
    }


    render(){
        return (
            <div className="login-form">
                <form>
                    <HeaderBar>{this.setState.pageTitle}</HeaderBar>
                    <Button waves='light' ><Link to='/'>Go Home</Link></Button>

                    <Row>
                        <Input placeholder="paigen11" label="Username" />
                        <Input placeholder="******" label="Password" />
                    </Row>
                </form>
                <Button waves='light'>Login</Button>
            </div>
        )
    }
}

export default Login;