import React, { Component } from 'react';
import './style.css';

export default (class NavComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-component">
                <div className="rx-bg-dark-0">
                    <nav className="navbar navbar-expand-md navbar-dark container">
                        <button className="btn navbar-brand" href="/">
                            Devel<strong><span className="rx-text-primary">R0X</span></strong>
                        </button>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#topNavbar"
                            aria-controls="topNavbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="topNavbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <button className="btn nav-link px-md-3">
                                        Ciberseguridad
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn nav-link px-md-3">
                                        Forense
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn nav-link px-md-3">
                                        Desarrollo de Software
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn nav-link px-md-3">
                                        Cumplimiento normativo
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
})
