import React, { Component } from 'react';
import HeaderBar from './HeaderBar';

const page = {
    pageTitle: "Profile Screen"
};

class Profile extends { Component } {
    render(){
        return (
            <div className='profile-page'>
                <HeaderBar title={page}/>

            </div>
        )
    }
}

export default Profile;