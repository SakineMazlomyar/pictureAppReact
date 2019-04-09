import React from 'react';
import { centerContent } from './css';
import {Layout} from './Layout';
import { BrowserRouter } from 'react-router-dom';



export class App extends React.Component{
    render() {
        return (
        <BrowserRouter>
        <Layout/>
        </BrowserRouter>
        )
    
    }
}