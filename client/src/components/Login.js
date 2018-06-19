import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import ErrorModal from './ErrorModal';
import axios from 'axios';

const page = {
    pageTitle:'Login Screen'
};

let loginError = {
    errorHeader: 'Login Error',
    errorBody: ''
};

class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            errorFromServer: '',
            show: false,
            loggedIn: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value });
    };

    loginUser = (e) => {
      e.preventDefault();

      axios.get('http://localhost:3000/loginUser', {
        params: {
            username: this.state.username,
            password: this.state.password
        }
      })
          .then((response) => {
              if(response.data === 'No user with that name'
                  || response.data === 'Bad password') {
                  loginError.errorBody = response.data;
                  this.setState({
                      show: true,
                  });
                  // console.log(loginError);
              } else {
                  if(response.data === 'Login successful')
                  this.setState({
                      loggedIn: 'yes'
                  });
              }
          })
    };

    render(){
        if(this.state.loggedIn === '') {
            return (
                <div className="login-form">
                    <Button><Link to='/'>Go Home</Link></Button>
                    <form onSubmit={this.loginUser}>
                        <HeaderBar title={page}/>
                        <FormControl placeholder="paigen11" label="Username" name="username" type="text" onChange={this.onChange}/>
                        <FormControl placeholder="******" label="Password" name="password" type="password" onChange={this.onChange}/>
                        <Button type="submit" bsStyle="primary">Login</Button>
                    </form>
                    <ErrorModal show={this.state.show} error={loginError}/>
                </div>
            )
        } else {
            return (
                <div className='welcome'>
                    <p>Welcome back {this.state.username}</p>
                    <Button><Link to={`/userProfile/${this.state.username}`}>Go To Profile</Link></Button>
                </div>
            )
        }
    }
}

export default Login;