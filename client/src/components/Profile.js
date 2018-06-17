import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const page = {
    pageTitle: "Profile Screen"
};

class Profile extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }

    // make axios call to db to get user info => pull from db using username from URL
    // make new route in db to get user info using username, refactor user info passed back on login
    // https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

    render(){
        if(this.props.user) {
            return (
                <div className='profile-page'>
                    <HeaderBar title={page}/>
                    <Table striped bordered condensed hover>
                        <tbody>
                        <tr>
                            <td>Salutation: </td>
                            <td>{this.props.user.salutation}</td>
                        </tr>
                        <tr>
                            <td>First Name: </td>
                            <td>{this.props.user.first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name: </td>
                            <td>{this.props.user.last_name}</td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td>{this.props.user.email}</td>
                        </tr>
                        <tr>
                            <td>Phone Number: </td>
                            <td>{this.props.user.phone_number}</td>
                        </tr>
                        <tr>
                            <td>Username: </td>
                            <td>{this.props.user.username}</td>
                        </tr>
                        <tr>
                            <td>Password: </td>
                            <td>{this.props.user.password}</td>

                        </tr>
                          </tbody>
                    </Table>
                    <Button bsStyle="primary"><Link to='/updateProfile'>Update</Link></Button>
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