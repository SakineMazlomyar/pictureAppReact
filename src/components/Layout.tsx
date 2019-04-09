import React, { CSSProperties } from 'react';
import Navbar from './Navbar';
import ViewContainer from './ViewContainer';
import { centerContent} from './css';


 export type View = "main"|"forest"|"desert"|"sky"
interface State{
    view:View
}

export  class Layout extends React.Component<{}, State>{
    constructor(props:{}){
        super(props)
        this.state = {
            view:'main'
        }

    }

    private goToMain = () =>{
        this.setState({
            view:'main'
        })
    }

    private viewOneItem = (viewName:View) =>{
        
        this.setState({
            view:viewName
        })
    }
    render(){
        return(
        <div style={centerContent}>
           <Navbar goToMain={this.goToMain}/>
            <ViewContainer showTheRightView={this.state.view} onClickSection={this.viewOneItem}/>
        </div>

        )
    }
}


