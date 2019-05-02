import React, { Component } from 'react';

export default class CanvasComponent extends Component {

    displayName = CanvasComponent.name;

    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    updateCanvas() {
        const context = this.refs.canvas.getContext('2d');
        for (let i = 1; i <= 6; i++) {
            let x = 5 * ((i - 1) * 24 + 23.4);
            context.moveTo(x, 0);
            context.lineTo(x, 830);
        }

        for (let i = 1; i <= 4; i++) {
            let y = 5 * ((i - 1) * 24 + 23.4) - 27;
            context.moveTo(0, y);
            context.lineTo(830, y);
        }
        context.strokeStyle = "#888";
        context.setLineDash([5, 6]);
        context.stroke();
    }

    render() {
        return (
            <canvas ref="canvas" width={830} height={500} id="canvas-main"/>
        );
    }
}