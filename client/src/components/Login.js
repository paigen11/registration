import React, { Component } from 'react';
import { Modal, FormControl, Button } from 'react-bootstrap';
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
            password: '',
            errorFromServer: '',
            show: false,
            loggedIn: '',
            loginError: {
                errorHeader: '',
                errorBody: ''
            }
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
              if(response.data)
              this.setState({
                  loggedIn: 'yes'
              });
          })
          .catch((error) => {
              if(error.response.data ){
                  this.setState({
                      show: true,
                      loginError: {
                          errorHeader: 'Login Error',
                          errorBody: error.response.data
                      }
                  });
              }
            })
    };

    closeModal = () => {
        this.setState({ show: false})
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
                    <Modal show={this.state.show} onHide={this.closeModal} className='error-modal'>
                        <Modal.Header>
                            <Modal.Title>{this.state.loginError.errorHeader}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.state.loginError.errorBody}</Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.closeModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
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