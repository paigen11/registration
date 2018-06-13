import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';

class Register extends Component {
    constructor() {
        super();

        this.setState = {
            pageTitle: 'Register Screen',
            salutation: '',
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            username: '',
            password: ''
        }
    }

    // registerUser = (e) => {
        // e.preventDefault
        // const data = new FormData(e.target);

        // fetch('/api/users', {
        //     method: 'POST',
        //     body: data
        // })
    // };



    render(){
        return (
            <div className="registration-form">
                <HeaderBar>{this.state.pageTitle}</HeaderBar>
                <Button waves='light' ><Link to='/'>Go Home</Link></Button>
                {/*<form onSubmit={this.registerUser}>*/}
                    <Row>
                        <Input placeholder="Ms." name="saulutation" label="Salutation" type="text"/>
                        <Input placeholder="Paige" name="first_name" label="First Name" type="text" />
                        <Input placeholder="Niedringhaus" name="last_name" label="Last Name" type="text"/>
                        <Input placeholder="paige@gmail.com" name="email" label="Email" type="email"/>
                        <Input placeholder="123-456-7890" name="phone_number" label="Phone Number" type="tel" />
                        <Input placeholder="paigen11" name="username" label="Username" type="text" />
                        <Input placeholder="*****" name="password" label="Password" type="password"/>
                    </Row>
                    <Button type='submit'>Register</Button>
                {/*</form>*/}
            </div>
        )
    }
}

export default Register;