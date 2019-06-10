import React from 'react';
import * as ReactDOM from "react-dom";

const modalRoot = document.getElementById("modalRoot");
interface Props{

}
interface State{
    el:HTMLDivElement
}
export default class Modal extends React.Component<Props, State>{
    constructor(props:Props){
        super(props);
        this.state ={
            el:document.createElement("div")
        }
    }

    componentDidMount(){
        modalRoot.appendChild(this.state.el)
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.state.el)
    }

    render(){
        return ReactDOM.createPortal(
            
            this.props.children,
            this.state.el

        )
    }

}