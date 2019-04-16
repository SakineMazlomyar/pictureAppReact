import React,{CSSProperties} from 'react';
import Modal from '../Modal';
interface Props{
    choosenView:string,
}
interface State{
    openModul:Boolean
}
export default class HeaderSection extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state={
            openModul:false
        }
        
        
    }
    toggleModal = ()=>{
        this.setState({
            openModul:!this.state.openModul
        })
    }
    render() {
        const modal = this.state.openModul ? (
            <Modal>
                <div style={modalStyle}>
                    <p style={paragrafStyle}>you are looking at {this.props.choosenView}</p>
                    <button style={modalChildStyle} onClick={this.toggleModal}>Close Modal!</button>
                </div>
            </Modal>
          ) : null;
        return (
            <div style={divStyl}>
                <span style={spanStyle}>{this.props.choosenView}</span>
                <button onClick={this.toggleModal} style={buttonStyle}>Open Modal Here!</button>
                {modal}
            </div>
        )
    
    }
}
const divStyl:CSSProperties={
    padding:"1.5em",
}
const modalStyle:CSSProperties = {
    position:"fixed",
    top:0,
    width:"100%",
    height:"100%",
    backgroundColor:"black",
    opacity:0.5,
    textAlign:"center"
}

const modalChildStyle:CSSProperties = {
    marginTop:"10"
}

const paragrafStyle:CSSProperties = {
    fontSize:"2em",
    marginTop:"8em",
    opacity:1,
    color:"white",
    fontWeight:"bold"
    

}

const buttonStyle:CSSProperties ={
    position:"absolute",
    right:0

}

const spanStyle:CSSProperties={
    position:"absolute",
    left:0,
    fontSize:"1.5em"
}