import React, { Component } from 'react';
import './style.css';
import Str from './strings.json';

export default (class MainFragmentHeader extends Component {

    constructor(props) {
        super(props);

        this.state = { };
        this.str = Str.es;
    }

    render() {
        return (
            <div>
                <p className="logo-top mb-4 lead">{this.str.header.title}</p>
                <h1 className="logo">
                    Devel<span>R0X</span>
                </h1>
                <p className="logo-bottom lead">
                    {this.str.header.message}
                </p>
            </div>
        );
    }
})
