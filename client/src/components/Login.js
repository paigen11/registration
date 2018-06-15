import React, { Component } from 'react';
import { Input, Row, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import axios from 'axios';

const page = {
    pageTitle:'Login Screen'
};

class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value });
    };

    loginUser = (e) => {
      e.preventDefault();
      console.log(this.state);

      axios.get('http://localhost:3000/api/loginUser', {
        params: {
            username: this.state.username,
            password: this.state.password
        }
      })
          .then((response) => {
              console.log(response.data)
          })
    };

    render(){
        return (
            <div className="login-form">
                <form onSubmit={this.loginUser}>
                    <HeaderBar title={page} />
                    <Button waves='light' ><Link to='/'>Go Home</Link></Button>
                    <Row>
                        <Input placeholder="paigen11" label="Username" name="username" onChange={this.onChange} />
                        <Input placeholder="******" label="Password" name="password" onChange={this.onChange} />
                    </Row>
                    <Button type="submit" waves='light'>Login</Button>
                </form>
            </div>
        )
    }
}

export default Login;