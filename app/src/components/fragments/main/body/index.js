import React, { Component } from 'react';
import './style.css';
import Str from './strings.json';

export default (class MainFragmentBody extends Component {

    constructor(props) {
        super(props);

        this.onSetFragment = props.onSetFragment;
        this.state = { };
        this.str = Str.es;
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid jumbotron-bg-light mb-0">
                    <div className="container">
                        <h1 className="mb-5">{this.str.content.introduction.title}</h1>
                        <p className="lead">
                            {this.str.content.introduction.lead}
                        </p>
                        <p>
                            {this.str.content.introduction.message}
                        </p>
                    </div>
                </div>

                <div className="jumbotron jumbotron-fluid jumbotron-icons mb-0 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 pt-4 pb-4">
                                <div className="text-primary">
                                    <i aria-hidden="true" className="fa fa-code fa-5x pt-2 pb-2"></i>
                                    <h3 className="mt-2 mb-4">
                                        {this.str.content.services.development.title}
                                    </h3>
                                </div>
                                <p>
                                    {this.str.content.services.development.message}
                                </p>
                                <button className="btn btn-primary mt-4" onMouseDown={event => this.onSetFragment('/es/servicios/desarrollo-de-software/')}>
                                    {this.str.readMore}
                                </button>
                            </div>
                            <div className="col-md-6 pt-4 pb-4">
                                <div className="text-primary">
                                    <i aria-hidden="true" className="fa fa-shield fa-5x pt-2 pb-2"></i>
                                    <h3 className="mt-2 mb-4">
                                        {this.str.content.services.cybersecurity.title}
                                    </h3>
                                </div>
                                <p>
                                    {this.str.content.services.cybersecurity.message}
                                </p>
                                <button className="btn btn-primary mt-4" onMouseDown={event => this.onSetFragment('/es/servicios/ciberseguridad/')}>
                                    {this.str.readMore}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="brochure" className="jumbotron jumbotron-fluid bg-dark text-light text-center">
                    <div className="container">
                        <h1>{this.str.content.informative.title}</h1>
                        <p className="lead mt-4">
                            {this.str.content.informative.message}
                        </p>
                        <a download className="btn btn-primary pl-4 pr-4 mt-4" href="/assets/docs/DevelR0X-Presentacion-2020-01-01.pdf">
                            {this.str.content.informative.button}
                        </a>
                    </div>
                </div>

                <div className="jumbotron jumbotron-fluid jumbotron-bg-light jumbotron-icons-rounded text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <i aria-hidden="true" className="fa fa-line-chart fa-4x"></i>
                                <h3 className="mt-5 mb-4">
                                    {this.str.content.benefits.costs.title}
                                </h3>
                                <p className="text-justify">
                                    {this.str.content.benefits.costs.message}
                                </p>
                            </div>
                            <div className="col-md-4">
                                <i aria-hidden="true" className="fa fa-gavel fa-4x"></i>
                                <h3 className="mt-5 mb-4">
                                    {this.str.content.benefits.compliance.title}
                                </h3>
                                <p className="text-justify">
                                    {this.str.content.benefits.compliance.message}
                                </p>
                            </div>
                            <div className="col-md-4">
                                <i aria-hidden="true" className="fa fa-handshake-o fa-4x"></i>
                                <h3 className="mt-5 mb-4">
                                    {this.str.content.benefits.confidence.title}
                                </h3>
                                <p className="text-justify">
                                    {this.str.content.benefits.confidence.message}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})
