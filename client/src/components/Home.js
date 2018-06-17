import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';

const page = {
    pageTitle: "Home Screen"
};

class Home extends Component {

    render(){
        return (
            <div>
                <HeaderBar title={page} />
                <Button><Link to='/login'>Login</Link></Button>
                <Button><Link to='/register'>Register</Link></Button>
            </div>
        )
    }
}

export default Home;