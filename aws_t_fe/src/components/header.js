import React from 'react';
import AWS_LOGO from '../images/aws-icon.jpg';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <nav className="navbar text-white" style= {{ backgroundColor: "#162B3C" }} >
                        <div className="container-fluid" >
                            <span className="navbar-brand mb-0 h1" >
                                <img src = {AWS_LOGO} alt= "logo" />
                                AWS Translate</span>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }

}
