import React, { CSSProperties } from 'react';
import Navbar from './Navbar';
import ViewContainer from './ViewContainer';
import { centerContent} from './css';


/*  export type View = "main"|"forest"|"desert"|"sky"
interface State{
    view:View
} */

export  class Layout extends React.Component{
/*     constructor(props:{}){
        super(props)
        this.state = {
            view:'main'
        }

    }
     */render(){
        return(
        <div style={centerContent}>
           <Navbar/>
            <ViewContainer/>
        </div>

        )
    }
}


