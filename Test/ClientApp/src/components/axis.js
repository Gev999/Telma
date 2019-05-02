import React, { Component } from 'react';
import CanvasComponent from './canvasComponent';
import CanvasLine from './canvasLine';
import './axis.css';

export default class Axis extends Component {

    displayName = Axis.name

    getAllVertical = () => {

        let arr = [];
        const count = 35;
        const set = 24;
        for (let i = 1; i < count; arr[i] = i++);
        let g = -1;
        return arr.map((id) => {
            let lname = id % 5 === 0 ? "line-v big-line-v" : "line-v";
            lname += id === 15 ? " red-line" : '';
            const nname = id === 15 ? "num-v s-num" : "num-v";
            const number = id % 5 === 0 ?
                <div className={nname} key={id + count} style={{ left: ((id - 1) * set + 16) + 'px' }}>{g}</div>
                : null;
            if (id % 5 === 0) g += 0.5;
            const axisX = id === count - 1 ?
                <div className="axis-x" style={{ left: ((id - 1) * set + 25) + 'px' }}>X</div>
                : null;
            return (
                <div key={id}>
                    <div className={lname} style={{ left: (id - 1) * set + 'px' }}></div>
                    {number}
                    {axisX}
                </div>)
        });
    }

    getAllHorizontal = () => {

        let arr = [];
        const count = 20;
        const offset = 20;
        const set = 24;
        let g = -0.5;
        for (let i = 1; i < count; arr[i] = i++);
        return arr.map((id) => {
            let lname = (id + 3) % 5 === 0 ? "line-h big-line-h" : "line-h";
            lname += id === 7 ? " red-line" : '';
            const nname = id === 7 ? "num-h s-num" : "num-h";
            const number = (id + 3) % 5 === 0 ?
                <div className={nname} key={id + count} style={{ top: ((count - id - 1) * set + offset + 15) + 'px' }}>{g}</div>
                : null;
            if (id % 5 === 0) g += 0.5;
            const axisY = id === count - 1 ?
                <div className="axis-y" style={{ top: ((count - id - 1) * set + offset + 15) + 'px' }}>Y</div>
                : null;
            return (
                <div key={id}>
                    <div className={lname} key={id} style={{ top: ((count - id - 1) * set + offset) + 'px' }}></div>
                    {number}
                    {axisY}
                </div>)
        });
    }

    getCoordinates = (event) => {
            const e = event.nativeEvent;
            let x = e.offsetX === undefined ? e.layerX : e.offsetX;
            let y = e.offsetY === undefined ? e.layerY : e.offsetY;
            x = ((x - 352) / 240).toFixed(1);
            y = ((330 - y) / 240).toFixed(1);
            this.props.changeCoordinates(+x, +y);
    }

    drawPoint = (e) => {
        if (this.props.canDraw) {
            const x = e.nativeEvent.offsetX
            const y = e.nativeEvent.offsetY;
            const cnt = this.refs.canvas3;
            const child = document.createElement("div");
            child.setAttribute("style", "width: 10px; height: 10px; border-radius: 100%; background-color: green; position: absolute; top: " + (y - 5) + "px; left: " + (x - 1) + "px");
            cnt.appendChild(child);
        }
    }

    render() {
        const line_vertical = this.getAllVertical();
        const line_horizontal = this.getAllHorizontal();
        return (
            <div id="container">
                <div id="x"></div>
                {line_vertical}
                <div id="y"></div>
                {line_horizontal}
                <CanvasComponent />
                <div id="x-0"></div>
                <div id="y-0"></div>
                <div id="coord-cont"
                    onMouseLeave={() => this.props.changeCoordinates(0, 0)}
                    onMouseMove={this.getCoordinates}
                    onMouseDown={this.drawPoint}
                    onMouseUp={this.drawPoint}>
                    <div id="canvas3" ref="canvas3"></div>
                    <CanvasLine canDraw={this.props.canDraw} />
                </div>
            </div>
        );
    }
}
