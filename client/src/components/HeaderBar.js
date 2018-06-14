import React, { Component } from 'react';

class HeaderBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            page: 'no-header'
        }
    }

    render(){
        return (
            <div className="header-bar">
                {this.props.pageTitle}
            </div>
        )
    }
}

export default HeaderBar;