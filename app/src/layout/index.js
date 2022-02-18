import React, { Component } from 'react';
import NavComponent from '../components/nav';
import MainFragment from '../fragments/main';
import './style.css';


export default (class Layout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavComponent />
                <MainFragment />
            </div>
        );
    }
})
