import React from 'react';
import Navbar from './Navbar';
import Content from './Content';

export default class Layout extends React.Component{
    render(){
        return(
        
        <div>
            <Navbar />
            <Content />

        </div>
            
            )
    }
}