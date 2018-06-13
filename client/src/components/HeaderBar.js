import React, { Component} from 'react';

class HeaderBar extends Component{
    constructor(){
        super();

        this.setState = {pageTitle: "No page"}
    }

    render(){
        return (
            <div className="header-bar">
                {this.setState.pageTitle}
            </div>
        )
    }
}

export default HeaderBar;