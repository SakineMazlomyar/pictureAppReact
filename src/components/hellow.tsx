import React from 'react';

import { centerContent } from '../css';


export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {

    render() {
        return <h1 style={centerContent}>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}