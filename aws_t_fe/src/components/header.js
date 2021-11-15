import React from 'react';

export default class Header extends React.Component {

    // // eslint-disable-next-line no-useless-constructor
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <nav className="navbar bg-primary text-white">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">AWS Translate</span>
                    </div>
                </nav>
            </div>
        )
    }

}
