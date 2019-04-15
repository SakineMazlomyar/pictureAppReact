import React, { CSSProperties } from 'react';
import Navbar from './Navbar';
import ViewContainer from './ViewContainer';
import { centerContent} from './css';
export default class Layout extends React.Component{
    
    render(){
        return(
        <div>
           <Navbar/>
            <ViewContainer/>
        </div>

        )
    }
}


