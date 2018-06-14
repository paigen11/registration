import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import axios from 'axios';

const pageTitle = 'Register Screen';
const querystring = require('querystring');


class Register extends Component {
    constructor() {
        super();

        this.state = {
            salutation: '',
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            username: '',
            password: ''
        }
    }

    registerUser = (e) => {
        axios.post('/registerUser',
            querystring.stringify({
                salutation: e.state.salutation,
                first_name: e.state.first_name,
                last_name: e.state.last_name,
                email: e.state.email,
                phone_number: e.state.phone_number,
                username: e.state.username,
                password: e.state.password
            }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function(response) {
                e.setState({
                    messageFromServer: response.data
                });
        });
    };

    render(){
        if(this.state.messageFromServer === ''){
            return (
                <div className="registration-form">
                    <HeaderBar title={pageTitle} />
                    <Button waves='light' ><Link to='/'>Go Home</Link></Button>
                    <form>
                        <Row>
                            <Input placeholder="Ms." name="saulutation" label="Salutation" type="text"/>
                            <Input placeholder="Paige" name="first_name" label="First Name" type="text" />
                            <Input placeholder="Niedringhaus" name="last_name" label="Last Name" type="text"/>
                            <Input placeholder="paige@gmail.com" name="email" label="Email" type="email"/>
                            <Input placeholder="123-456-7890" name="phone_number" label="Phone Number" type="tel" />
                            <Input placeholder="paigen11" name="username" label="Username" type="text" />
                            <Input placeholder="*****" name="password" label="Password" type="password"/>
                        </Row>
                        <Button onClick={this.registerUser}>Register</Button>
                    </form>
                </div>
            )
        } else {
            return (
                <h3>{this.state.messageFromServer}</h3>
            )
        }
    }
}

export default Register;