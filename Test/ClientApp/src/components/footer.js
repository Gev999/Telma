import React, { Component } from 'react';
import './footer.css';
import imgH from '../img/hand.png';
import imgR from '../img/row.png';

export default class Footer extends Component { 

    displayName = Footer.name

    render() {
        const { x, y } = this.props;
        return (
            <div className="f-container">
                <div className="select"></div>
                <div className="coordinates">
                    <p>X<span className="coordinate-value">: {x}</span></p>
                    <p>Y<span className="coordinate-value">: {y}</span></p>
                    <p>Z : 0</p>
                </div>
                <div className="pics">
                    <div className="row">
                        <img src={imgR} alt="" title="Depth"/>
                    </div>
                    <div className="hand">
                        <img src={imgH} alt="" title="Set hand screen mode"/>
                    </div>
                </div>
                <div className="selected">
                    <p>Selected : 0</p>
                </div>
                <div className="scroll" title="Last operation information">
                    <div className="min-scroll"></div>
                </div>
            </div> )
    }
} 