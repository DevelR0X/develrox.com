import React, { Component } from 'react';
import './style.css';
import Str from './strings.json';

export default (class Fragment extends Component {

    constructor(props) {
        super(props);

        this.state = { };
        this.str = Str.es;
    }

    render() {
        return (
            <div>
                <h1 className="mb-4 mt-4">{this.str.header.title}</h1>
                <p className="lead">{this.str.header.message}</p>
            </div>
        );
    }
})
