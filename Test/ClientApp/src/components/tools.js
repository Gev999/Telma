import React, { Component } from 'react';
import './tools.css';
import imgL from '../img/create-line.png';
import imgL2 from '../img/create-line-back.png';

export default class Tools extends Component {

    displayName = Tools.name

    render() {
        const img = this.props.canDraw ? imgL2 : imgL;
        return (
            <div className="tool">
                <div className="block-1"></div>
                <div className="block-2">
                    <div className="create-line" onClick={() => this.props.change()}>
                        <img src={img} alt="" title="Create line segment" />
                    </div>
                </div>
                <div className="block-3"></div>
            </div>
        );
    }
}