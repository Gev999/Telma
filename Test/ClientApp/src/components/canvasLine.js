import React, { Component } from 'react';

export default class CanvasLine extends Component {

    displayName = CanvasLine.name;

    componentDidMount() {
        this.canvas = this.refs.canvas2;
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        this.canvas.onmousedown = this.onmousedown;
        this.canvas.onmouseup = this.onmouseup;
        this.canvas.onmousemove = this.onmousemove;

        this.bounds = this.canvas.getBoundingClientRect();
        this.ctx = this.canvas.getContext("2d");
        this.hasLoaded = true;

        this.draw();
    }

    componentDidUpdate() {
        this.canvas = this.refs.canvas2;
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        this.canvas.onmousedown = this.onmousedown;
        this.canvas.onmouseup = this.onmouseup;
        this.canvas.onmousemove = this.onmousemove;

        this.bounds = this.canvas.getBoundingClientRect();
        this.ctx = this.canvas.getContext("2d");
        this.hasLoaded = true;

        this.draw();
    }

    canvasWidth = 820;
    canvasHeight = 485;
    canvas = null;
    bounds = null;
    ctx = null;
    hasLoaded = false;

    startX = 0;
    startY = 0;
    mouseX = 0;
    mouseY = 0;
    isDrawing = false;
    existingLines = [];
    existingPoints = [];

    draw = () => {

        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);


        this.ctx.strokeStyle = "#0000fb";
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();

        for (let i = 0; i < this.existingLines.length; ++i) {
            const line = this.existingLines[i];
            this.ctx.moveTo(line.startX, line.startY);
            this.ctx.lineTo(line.endX, line.endY);
        }

        this.ctx.stroke();

        if (this.isDrawing) {
            this.ctx.strokeStyle = "red";
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(this.startX, this.startY);
            this.ctx.lineTo(this.mouseX, this.mouseY);
            this.ctx.stroke();
        }
    }


    onmousedown = (e) => {
        if (this.hasLoaded && e.button === 0) {
            if (!this.isDrawing && this.props.canDraw) {
                this.startX = e.clientX - this.bounds.left;
                this.startY = e.clientY - this.bounds.top;

                this.isDrawing = true;
            }
            
            this.draw();
        }
    }

    onmouseup = (e) => {
        if (this.hasLoaded && e.button === 0) {
            if (this.isDrawing) {
                this.existingLines.push({
                    startX: this.startX,
                    startY: this.startY,
                    endX: this.mouseX,
                    endY: this.mouseY
                });

                this.isDrawing = false;
                fetch('api/Home/CreateLine?startX=' + this.startX + '&startY=' + this.startY + '&endX=' + this.mouseX + '&endY=' + this.mouseY);
            }
            this.draw();
        }
    }

    onmousemove = (e) => {
        if (this.hasLoaded) {
            this.mouseX = e.clientX - this.bounds.left;
            this.mouseY = e.clientY - this.bounds.top;

            if (this.isDrawing && this.props.canDraw) {
                this.draw();
            }
        }
    }


    render() {
        return <canvas ref="canvas2" className="canvas2" />
    }
}