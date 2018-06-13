import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';
// import HeaderBar from '/../HeaderBar';

class Home extends Component {
    constructor() {
        super();

        this.setState = {
            pageTitle: 'Home Screen'
        }
    }

    render(){
        return (
            <div>
                {/*<HeaderBar>{this.setState.pageTitle}</HeaderBar>*/}
                <Button waves='light' ><Link to='/login'>Login</Link></Button>
                <Button waves='light'><Link to='/register'>Register</Link></Button>
            </div>
        )
    }
}

export default Home;