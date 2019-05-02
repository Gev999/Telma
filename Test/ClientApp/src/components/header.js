import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {

    displayName = Header.name

    render() {
        return (
            <div className="header">
                <div className="header-1"></div>
                <div className="header-2">
                    <div className="block"></div>
                </div>
            </div>
            );
    }
}