import React, { Component } from 'react';
import Axis from './components/axis';
import Footer from './components/footer';
import Header from './components/header';
import Tools from './components/tools';
import './App.css';


export default class App extends Component {
    displayName = App.name

    constructor() {
        super();
        if (window.performance) {
            if (performance.navigation.type === 1) {
                fetch('api/Home/EmptyTheData');
            } 
        }
    }

    state = {
        x: 0,
        y: 0,
        canDraw: false,
    }

    changeCoordinates = (a, b)=> {
        this.setState({ x: a, y: b });
    }

    change = () => {
        this.setState((state) => {
            return { canDraw: !state.canDraw }
        });
    }

    render() {
        return (
            <div className="main-content">
                <Header />
                <div className="main-block">
                    <Axis changeCoordinates={this.changeCoordinates} canDraw={this.state.canDraw}/>
                    <Tools change={this.change} canDraw={this.state.canDraw}/>
                </div>
                <Footer x={this.state.x} y={this.state.y}/>
            </div>
            )
    }
  }
