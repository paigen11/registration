import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ErrorModal from './ErrorModal';
import axios from 'axios';
import './Profile.css';


const page = {
    pageTitle: "Profile Screen"
};

const profileError = {
    errorHeader: 'Profile Error',
    errorBody: ''
};

class Profile extends Component {
    constructor(){
        super();

        this.state = {
            user: {
                salutation: '',
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                username: '',
                password: ''
            },
            isLoading: false,
            show: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        axios.get('http://localhost:3000/getUserInfo', {
            params: {
                username: this.props.match.params.username
            }
        }).then((response) => {
            // figure out how to get error modal to work if user name is invalid, 404's kind of a problem
            if(response.data === 'No user with that name exists in the db'){
                profileError.errorBody = response.data;
                this.setState({
                    show: true,
                    isLoading: false
                });
            } else {
                this.setState({
                    user: response.data[0],
                    isLoading: false
                });
            }
        })
    }

    render(){

        if(this.state.isLoading) {
            return <p>Loading user profile...</p>
        } else if(this.state.isLoading === false) {
            return (
                <div className='profile-page'>
                    <HeaderBar title={page}/>
                    <ErrorModal show={this.state.show} error={profileError} />
                    <Table striped bordered condensed hover>
                        <tbody>
                        <tr>
                            <td>Salutation:</td>
                            <td>{this.state.user.salutation}</td>
                        </tr>
                        <tr>
                            <td>First Name:</td>
                            <td>{this.state.user.first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>{this.state.user.last_name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{this.state.user.email}</td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td>{this.state.user.phone_number}</td>
                        </tr>
                        <tr>
                            <td>Username:</td>
                            <td>{this.state.user.username}</td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td className='password'>{this.state.user.password}</td>

                        </tr>
                        </tbody>
                    </Table>
                    <Button bsStyle="primary"><Link to={`/updateUser/${this.state.user.username}`}>Update</Link></Button>
                    {/*<Button type='submit' bsStyle="primary">Delete User</Button>*/}
                </div>
            )
        } else {
                return (
                    <div>
                        <p>Looks like you haven't logged in yet, please login in to see your profile page</p>
                        <Button><Link to='/login'>Login</Link></Button>
                    </div>
                );
            }
        }
}

export default Profile;