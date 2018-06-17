import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import ErrorModal from './ErrorModal';
import Profile from './Profile';
import axios from 'axios';

const page = {
    pageTitle:'Login Screen'
};

let username = null;

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
      // console.log(this.state);

      axios.get('http://localhost:3000/api/loginUser', {
        params: {
            username: this.state.username,
            password: this.state.password
        }
      })
          .then((response) => {
              console.log(response.data);
              if(response.data === 'No user with that name'
                  || response.data === 'Bad password') {
                  loginError.errorBody = response.data;
                  this.setState({
                      show: true,
                  });
                  // console.log(loginError);
              } else {
                  username = response.data.username;
                  this.setState({
                      loggedIn: 'yes',
                      user: response.data
                  })
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
                        <FormControl placeholder="paigen11" label="Username" name="username" onChange={this.onChange}/>
                        <FormControl placeholder="******" label="Password" name="password" onChange={this.onChange}/>
                        <Button type="submit" bsStyle="primary">Login</Button>
                    </form>
                    <ErrorModal show={this.state.show} error={loginError}/>
                </div>
            )
        } else {
            return (
                <div className='welcome'>
                    <p>Welcome back {this.state.user.username}</p>
                    <Button><Link to={`/profile?user=${username}`}>Go To Profile</Link></Button>
                    <Profile user={this.state.user} />
                </div>
            )
        }
    }
}

export default Login;