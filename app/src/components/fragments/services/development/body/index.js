import React, { Component } from 'react';
import './style.css';
import Str from './strings.json';

export default (class Fragment extends Component {

    constructor(props) {
        super(props);

        this.onSetFragment = props.onSetFragment;
        this.state = { };
        this.str = Str.es;
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid jumbotron-icons mb-0 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 pt-4 pb-4">
                                <div className="text-primary">
                                    <i aria-hidden="true" className="d-block fa fa-shield fa-5x pt-2 pb-2"></i>
                                    <h4 className="mt-2 mb-4">
                                        {this.str.content.benefits.security.title}
                                    </h4>
                                </div>
                                <p>
                                    {this.str.content.benefits.security.message}
                                </p>
                            </div>
                            <div className="col-md-4 pt-4 pb-4">
                                <div className="text-primary">
                                    <i aria-hidden="true" className="fa fa-key fa-5x pt-2 pb-2"></i>
                                    <h4 className="mt-2 mb-4">
                                        {this.str.content.benefits.dependency.title}
                                    </h4>
                                </div>
                                <p>
                                    {this.str.content.benefits.dependency.message}
                                </p>
                            </div>
                            <div className="col-md-4 pt-4 pb-4">
                                <div className="text-primary">
                                    <i aria-hidden="true" className="fa fa-cubes fa-5x pt-2 pb-2"></i>
                                    <h4 className="mt-2 mb-4">
                                        {this.str.content.benefits.technology.title}
                                    </h4>
                                </div>
                                <p>
                                    {this.str.content.benefits.technology.message}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="jumbotron jumbotron-fluid bg-dark text-light text-center">
                    <div className="container">
                        <h1>
                            {this.str.content.informative.title}
                        </h1>
                        <p className="lead mt-4">
                            {this.str.content.informative.message}
                        </p>
                    </div>
                </div>

                <div className="jumbotron jumbotron-fluid jumbotron-bg-light">
                    <div className="container">
                        <h1 className="text-center mb-4">
                            {this.str.content.cycle.title}
                        </h1>
                        <ul className="list-unstyled">
                            <li className="media mb-3">
                                <span className="align-self-center mr-3 text-secondary">
                                    <span className="fa-stack fa-lg fa-2x">
                                        <i className="fa fa-square-o fa-stack-2x"></i>
                                        <i className="fa fa-search-plus fa-stack-1x"></i>
                                    </span>
                                </span>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1 font-weight-bold">
                                        {this.str.content.cycle.analysis.title}
                                    </h5>
                                    <p>
                                        {this.str.content.cycle.analysis.message}
                                    </p>
                                </div>
                            </li>
                            <li className="media mb-3">
                                <span className="align-self-center mr-3 text-secondary">
                                    <span className="fa-stack fa-lg fa-2x">
                                        <i className="fa fa-square-o fa-stack-2x"></i>
                                        <i className="fa fa-lightbulb-o fa-stack-1x"></i>
                                    </span>
                                </span>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1 font-weight-bold">
                                        {this.str.content.cycle.design.title}
                                    </h5>
                                    <p>
                                        {this.str.content.cycle.design.message}
                                    </p>
                                </div>
                            </li>
                            <li className="media mb-3">
                                <span className="align-self-center mr-3 text-secondary">
                                    <span className="fa-stack fa-lg fa-2x">
                                        <i className="fa fa-square-o fa-stack-2x"></i>
                                        <i className="fa fa-file-code-o fa-stack-1x"></i>
                                    </span>
                                </span>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1 font-weight-bold">
                                        {this.str.content.cycle.creation.title}
                                    </h5>
                                    <p>
                                        {this.str.content.cycle.creation.message}
                                    </p>
                                </div>
                            </li>
                            <li className="media mb-3">
                                <span className="align-self-center mr-3 text-secondary">
                                    <span className="fa-stack fa-lg fa-2x">
                                        <i className="fa fa-square-o fa-stack-2x"></i>
                                        <i className="fa fa-check fa-stack-1x"></i>
                                    </span>
                                </span>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1 font-weight-bold">
                                        {this.str.content.cycle.tests.title}
                                    </h5>
                                    <p>
                                        {this.str.content.cycle.tests.message}
                                    </p>
                                </div>
                            </li>
                            <li className="media mb-3">
                                <span className="align-self-center mr-3 text-secondary">
                                    <span className="fa-stack fa-lg fa-2x">
                                        <i className="fa fa-square-o fa-stack-2x"></i>
                                        <i className="fa fa-terminal fa-stack-1x"></i>
                                    </span>
                                </span>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1 font-weight-bold">
                                        {this.str.content.cycle.deployment.title}
                                    </h5>
                                    <p>
                                        {this.str.content.cycle.deployment.message}
                                    </p>
                                </div>
                            </li>
                            <li className="media">
                                <span className="align-self-center mr-3 text-secondary">
                                    <span className="fa-stack fa-lg fa-2x">
                                        <i className="fa fa-square-o fa-stack-2x"></i>
                                        <i className="fa fa-phone fa-stack-1x"></i>
                                    </span>
                                </span>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1 font-weight-bold">
                                        {this.str.content.cycle.continuity.title}
                                    </h5>
                                    <p>
                                        {this.str.content.cycle.continuity.message}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
})
