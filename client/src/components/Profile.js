import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import { Modal, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';


const page = {
    pageTitle: "Profile Screen"
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
                password: '',
            },
            isLoading: false,
            show: false,
            profileError: {
                errorHeader: '',
                errorBody: ''
            }
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        axios.get('http://localhost:3000/getUserInfo', {
            params: {
                username: this.props.match.params.username
            }
        })
            .then((response) => {
            if(response.data){
                this.setState({
                    user: response.data[0],
                    isLoading: false
                });
            }
        })
            .catch((error) => {
                console.log(error.response);
                if(error.response.data){
                    this.setState({
                        show: true,
                        isLoading: false,
                        profileError: {
                            errorHeader: 'User Profile Error',
                            errorBody: error.response.data
                        }
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
                    <Button><Link to='/'>Go Home</Link></Button>
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
                    <Button bsStyle="primary">Delete User</Button>
                    <Modal show={this.state.show} onHide={this.closeModal} className='error-modal'>
                        <Modal.Header>
                            <Modal.Title>{this.state.profileError.errorHeader}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.state.profileError.errorBody}</Modal.Body>
                        <Modal.Footer>
                            <Button><Link to='/login'>Back To Login</Link></Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
        } else {
                return (
                    <div>
                        <p>Looks like you haven't logged in yet, please login in to see your profile page</p>
                        <Button><Link to='/login'>Back To Login</Link></Button>
                    </div>
                );
            }
        }
}

export default Profile;