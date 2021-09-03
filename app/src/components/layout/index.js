import React, { Component } from 'react';
import MainFragmentBody from '../fragments/main/body';
import MainFragmentHeader from '../fragments/main/header';
import CybersecurityFragmentBody from '../fragments/services/cybersecurity/body';
import CybersecurityHeaderFragment from '../fragments/services/cybersecurity/header';
import DevelopmentFragmentBody from '../fragments/services/development/body';
import DevelopmentHeaderFragment from '../fragments/services/development/header';
import Str from './strings.json';


export default (class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fragment: { body: MainFragmentBody, header: MainFragmentHeader }
        };

        this.str = Str.es;
        this.setFragment = this.setFragment.bind(this);
    }

    componentDidMount() {
        this.setFragment(window.location.pathname);
    }

    setFragment(url) {
        if(url === '/') {
            this.setState({
                fragment: { body: MainFragmentBody, header: MainFragmentHeader }
            });
        } else if(url === '/es/servicios/ciberseguridad/') {
            this.setState({
                fragment: { body: CybersecurityFragmentBody, header: CybersecurityHeaderFragment }
            });
        } else if(url === '/es/servicios/desarrollo-de-software/') {
            this.setState({
                fragment: { body: DevelopmentFragmentBody, header: DevelopmentHeaderFragment }
            });
        } else {
            console.error(`Invalid URL: ${url}`)
        }

        window.history.pushState({}, '', url);
    }

    render() {
        return (
            <div>
                <div className="header-block text-light" id={this.state.fragment.header.name}>
                    <div className="container">

                        <div className="header-top row pb-4 pt-4">
                            <div className="col-md-3 logo">
                                Devel<span>R0X</span>
                            </div>
                            {/*<div className="col-md-2 text-center">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                                <a className="ml-2 text-white" data-lang="es" href="/es/"><u>ES</u></a>
                                <a className="ml-2 text-white" data-lang="en" href="/en/"><u>EN</u></a>
                            </div>*/}
                            <div className="col-md-7 text-center">
                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                <span className="font-weight-bold ml-2">{ this.str.contact.email }</span>
                                <i className="ml-4 fa fa-phone" aria-hidden="true"></i>
                                <span className="font-weight-bold ml-2">{ this.str.contact.phone }</span>
                            </div>
                            <div className="col-md-2 text-right">
                                <a download className="btn btn-outline-secondary" href="/assets/docs/DevelR0X-Presentacion-2020-01-01.pdf">
                                    { this.str.presentation.title }
                                </a>
                            </div>
                        </div>

                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <button className="btn btn-link navbar-brand logo" onMouseDown={event => this.setFragment('/')}>
                                Devel<span>R0X</span>
                            </button>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#top-menu"
                                aria-controls="top-menu"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="top-menu">
                                <ul className="navbar-nav">
                                    <li className="nav-item active pl-3 pr-3">
                                        <button className="btn btn-link nav-link" onMouseDown={event => this.setFragment('/')}>
                                            { this.str.menu.home.title }
                                        </button>
                                    </li>
                                    <li className="nav-item active pl-3 pr-3">
                                        <button className="btn btn-link nav-link" onMouseDown={event => this.setFragment('/es/servicios/desarrollo-de-software/')}>
                                            { this.str.menu.development.title }
                                        </button>
                                    </li>
                                    <li className="nav-item active pl-3 pr-3">
                                        <button className="btn btn-link nav-link" onMouseDown={event => this.setFragment('/es/servicios/ciberseguridad/')}>
                                            { this.str.menu.cybersecurity.title }
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="container">
                        <div className="header-content">
                            <this.state.fragment.header />
                        </div>
                    </div>
                </div>
                <div id={this.state.fragment.body.name}>
                    <this.state.fragment.body />
                </div>
                <footer className="bg-dark text-light">
                    <div className="jumbotron bg-dark mb-0">
                        <div className="container">
                            <div className="logo text-center">
                                - Devel<span>R0X</span> -
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <h3 className="mb-4">
                                        { this.str.moreInfo.title }
                                    </h3>
                                    <p className="text-secondary">
                                        { this.str.moreInfo.message }
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <h3 className="mb-4">
                                        { this.str.contact.title }
                                    </h3>
                                    <ul className="text-secondary">
                                        <li>
                                            <i aria-hidden="true" className="fa fa-envelope-o fa-fw"></i>
                                            { this.str.contact.email }
                                        </li>
                                        <li>
                                            <i aria-hidden="true" className="fa fa-phone fa-fw"></i>
                                            { this.str.contact.phone }
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h3 className="mb-4">
                                        { this.str.attentionHours.title }
                                    </h3>
                                    <div className="text-secondary">
                                        <p>
                                            { this.str.attentionHours.location }<br />
                                            { this.str.attentionHours.sla }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
});
