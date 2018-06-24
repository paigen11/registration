import React, { Component } from 'react';
import {FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import axios from 'axios';

const page =  {
    pageTitle: 'Register Screen'
};

function ShowLogin(props) {
    if(!props.login){
        return null;
    }

    console.log(props);
    return(
        <div className='loginInfo'>
            <div>{props.loginMessage}</div>
            <Button><Link to='/login'>Go to Login</Link></Button>
        </div>
    )
};

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            salutation: '',
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            username: '',
            password: '',
            messageFromServer: '',
            showLogin: false
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    registerUser = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/registerUser',
            {
                salutation: this.state.salutation,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            }).then((response) => {
                if(response.data === 'Username already taken. Please try another one or login now.'){
                    this.setState({
                        showLogin: true,
                        messageFromServer: response.data
                    });
                } else {
                    this.setState({
                        messageFromServer: response.data
                    });
                }
            });
    };

    render(){
        const serverMessage = this.state.messageFromServer;
        if(serverMessage === '' || serverMessage === 'Username already taken. Please try another one or login now.'){
            return (
                <div className="registration-form">
                    <HeaderBar title={page} />
                    <Button><Link to='/'>Go Home</Link></Button>
                        <form onSubmit={this.registerUser}>
                                <FormControl placeholder="Ms." name="salutation" label="Salutation" type="text"  onChange={this.onChange} />
                                <FormControl placeholder="Paige" name="first_name" label="First Name" type="text"  onChange={this.onChange} />
                                <FormControl placeholder="Niedringhaus" name="last_name" label="Last Name" type="text"  onChange={this.onChange} />
                                <FormControl placeholder="paige@gmail.com" name="email" label="Email" type="email" onChange={this.onChange} />
                                <FormControl placeholder="paigen11" name="username" label="Username" type="text" onChange={this.onChange} />
                                <FormControl placeholder="*****" name="password" label="Password" type="password" onChange={this.onChange} />
                            <Button type='submit' bsStyle="primary">Register</Button>
                        </form>
                    <ShowLogin login={this.state.showLogin} loginMessage={this.state.messageFromServer}/>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>{this.state.messageFromServer}</h3>
                    <Button><Link to='/'>Go Home</Link></Button>
                </div>
            )
        }
    }
}

export default Register;