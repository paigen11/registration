import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import axios from 'axios';

const page =  {
    pageTitle: 'Register Screen'
};

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
            password: '',
            messageFromServer: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    registerUser = (e) => {
        e.preventDefault();

        // find a better way to pass data through from ui to server
        axios.post('http://localhost:3000/api/registerUser',
            {
                salutation: this.state.salutation,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                phone_number: this.state.phone_number,
                username: this.state.username,
                password: this.state.password
            }).then((response) => {
                console.log(response.data);
                this.setState({
                    messageFromServer: response.data
                });
        });
    };

    render(){
        if(this.state.messageFromServer === ''){
            return (
                <div className="registration-form">
                    <HeaderBar title={page} />
                    <Button waves='light' ><Link to='/'>Go Home</Link></Button>
                        <form onSubmit={this.registerUser}>
                            <Row>
                                <Input placeholder="Ms." name="salutation" label="Salutation" type="text"  onChange={this.onChange} />
                                <Input placeholder="Paige" name="first_name" label="First Name" type="text"  onChange={this.onChange} />
                                <Input placeholder="Niedringhaus" name="last_name" label="Last Name" type="text"  onChange={this.onChange} />
                                <Input placeholder="paige@gmail.com" name="email" label="Email" type="email" onChange={this.onChange} />
                                <Input placeholder="123-456-7890" name="phone_number" label="Phone Number" type="tel" onChange={this.onChange} />
                                <Input placeholder="paigen11" name="username" label="Username" type="text" onChange={this.onChange} />
                                <Input placeholder="*****" name="password" label="Password" type="password" onChange={this.onChange} />
                            </Row>
                            <Button type='submit'>Register</Button>
                        </form>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>{this.state.messageFromServer}</h3>
                    <Button waves='light' ><Link to='/'>Go Home</Link></Button>
                </div>
            )
        }
    }
}

export default Register;