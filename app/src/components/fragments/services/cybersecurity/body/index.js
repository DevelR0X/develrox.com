import React, { Component } from 'react';
import './style.css';
import Str from './strings.json';
import pentestingImg from './pentesting.png';

export default (class CybersecurityFragmentBody extends Component {

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
                                    <i aria-hidden="true" className="d-block fa fa-user-secret fa-5x pt-2 pb-2"></i>
                                    <h4 className="mt-2 mb-4">
                                        {this.str.content.benefits.ethics.title}
                                    </h4>
                                </div>
                                <p>
                                    {this.str.content.benefits.ethics.message}
                                </p>
                            </div>
                            <div className="col-md-4 pt-4 pb-4">
                                <div className="text-primary">
                                    <i aria-hidden="true" className="fa fa-lightbulb-o fa-5x pt-2 pb-2"></i>
                                    <h4 className="mt-2 mb-4">
                                        {this.str.content.benefits.knowledge.title}
                                    </h4>
                                </div>
                                <p>
                                    {this.str.content.benefits.knowledge.message}
                                </p>
                            </div>
                            <div className="col-md-4 pt-4 pb-4">
                                <div className="text-primary">
                                    <i aria-hidden="true" className="fa fa-check-square-o fa-5x pt-2 pb-2"></i>
                                    <h4 className="mt-2 mb-4">
                                        {this.str.content.benefits.compliance.title}
                                    </h4>
                                </div>
                                <p>
                                    {this.str.content.benefits.compliance.message}
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
                        <h1 className="text-center mb-5">
                            {this.str.content.details.title}
                        </h1>

                        <div className="row justify-content-md-center mb-5">
                            <div className="col-md-3">
                                <img className="img-fluid" src={pentestingImg} alt="pentesting" />
                            </div>
                            <div className="col-md-9 text-justify">
                                <h4>
                                    {this.str.content.details.manual.title}
                                </h4>
                                <p className="mb-5">
                                    {this.str.content.details.manual.message}
                                </p>
                            </div>
                        </div>

                        <div className="normal-icons-rounded text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="text-primary">
                                            <i aria-hidden="true" className="fa fa-code fa-4x"></i>
                                            <h3 className="mt-5 mb-4">
                                                {this.str.content.details.modes.whiteBox.title}
                                            </h3>
                                        </div>
                                        <p className="text-center">
                                            {this.str.content.details.modes.whiteBox.subtitle}
                                        </p>
                                        <p className="text-justify">
                                            {this.str.content.details.modes.whiteBox.message}
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="text-primary">
                                            <i aria-hidden="true" className="fa fa-cubes fa-4x"></i>
                                            <h3 className="mt-5 mb-4">
                                                {this.str.content.details.modes.applicative.title}
                                            </h3>
                                        </div>
                                        <p className="text-center">
                                            {this.str.content.details.modes.applicative.subtitle}
                                        </p>
                                        <p className="text-justify">
                                            {this.str.content.details.modes.applicative.message}
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="text-primary">
                                            <i aria-hidden="true" className="fa fa-wifi fa-4x"></i>
                                            <h3 className="mt-5 mb-4">
                                                {this.str.content.details.modes.perimeter.title}
                                            </h3>
                                        </div>
                                        <p className="text-center">
                                            {this.str.content.details.modes.perimeter.subtitle}
                                        </p>
                                        <p className="text-justify">
                                            {this.str.content.details.modes.perimeter.message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
})
