import React, { CSSProperties } from 'react';
import Navbar from './Navbar';
import ViewContainer from './ViewContainer';
import { centerContent} from './css';
export  class Layout extends React.Component{
    
    render(){
        return(
        <div style={centerContent}>
           <Navbar/>
            <ViewContainer/>
        </div>

        )
    }
}


