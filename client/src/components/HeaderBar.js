import React, { Component } from 'react';

class HeaderBar extends Component{

    render(){
        return (
            <div className="header-bar">
                {this.props.title.pageTitle}
            </div>
        );
    }
}

export default HeaderBar;