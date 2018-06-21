import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import { FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

const page = {
    pageTitle: "Update Screen"
};

class UpdateUser extends Component {
    constructor(){
        super();

        this.state = {
                salutation: '',
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                username: '',
                password: '',
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        axios.get('http://localhost:3000/getUserInfo', {
            params: {
                username: this.props.match.params.username
            }
        }).then((response) => {
            if(response.data === 'No user with that name exists in the db'){
                // profileError.errorBody = response.data;
                this.setState({
                    show: true,
                    isLoading: false,
                });
            } else {
                this.setState({
                    salutation: response.data[0].salutation,
                    username: response.data[0].username,
                    password: response.data[0].password,
                    isLoading: false
                });
                console.log(this.state.user);
            }
        })
    }

    onChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.value);
    };

    updateUser = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/updateUser',
            {
                salutation: this.state.salutation,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                phone_number: this.state.phone_number,
                username: this.state.username,
                password: this.state.password
            }).then((response) => {
            if(response.data === 'Username already taken. Please try another one or login now.'){
                this.setState({
                    showLogin: true,
                    messageFromServer: response.data
                });
                console.log(this.state.showLogin);
            } else {
                this.setState({
                    messageFromServer: response.data
                });
            }
        });
    };


    render() {
        if (this.state.isLoading) {
            return <p>Loading user profile...</p>
        } else if (this.state.isLoading === false) {
            return (
                <div className='update-user'>
                    <HeaderBar title={page}/>
                    <form onSubmit={this.updateUser}>
                        <FormControl value={this.state.salutation} placeholder="Ms." name="salutation"
                                     label="Salutation" type="text" onChange={this.onChange}/>
                        <FormControl value={this.state.first_name} placeholder="Paige" name="first_name" label="First Name" type="text"
                                     onChange={this.onChange}/>
                        <FormControl value={this.state.last_name} placeholder="Niedringhaus" name="last_name" label="Last Name" type="text"
                                     onChange={this.onChange}/>
                        <FormControl value={this.state.email} placeholder="paige@gmail.com" name="email" label="Email" type="email"
                                     onChange={this.onChange}/>
                        <FormControl value={this.state.phone_number} placeholder="123-456-7890" name="phone_number" label="Phone Number" type="tel"
                                     onChange={this.onChange}/>
                        <FormControl value={this.state.username} placeholder="paigen11" name="username" label="Username" type="text"
                                     onChange={this.onChange}/>
                        <FormControl value={this.state.password} placeholder="*****" name="password" label="Password" type="password"
                                     onChange={this.onChange}/>
                        <Button type='submit' bsStyle="primary">Update</Button>
                    </form>
                </div>
            )
        }
    }
}

export default UpdateUser;