import React,{CSSProperties} from 'react';
import Navbar from './Navbar';
import ViewContainer from './ViewContainer';
export default class Layout extends React.Component{
    
    render(){
        return(
        <div style={divStyle}>
           <Navbar/>
            <ViewContainer/>
        </div>

        )
    }
}

const divStyle:CSSProperties={
    height:"100%",
    margin:0
}



